import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from "yup"


// Meta API
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export default function BookingForm(){

        const [times, setTimesArray] = useState([]);

        const today = new Date();
        today.setDate(today.getDate() - 1);
        today.toLocaleString();

        const formik = useFormik({
            initialValues: {
                date: "",
                guests: "",
                occasion: "Birthday",
                time: "Select a date"
            },
            validationSchema: Yup.object({
                date: Yup.date().typeError("Please enter a valid date, format: MM/DD/YYYY").required("Date is a requiered field").min(today, "Date is too early"),
                guests: Yup.number()
                .typeError("Please enter a valid number")
                .required("Guests number is required")
                .min(1, "Number of Guests atleast 1")
                .max(10, "Maximum number of Guests is 10")
            }),
            onSubmit: (values) => {
                submitAPI(values) ? console.log("Form successfully submitted") : console.log("Error")
            }
        });

        return(
        <div className="booking-form">
            <div className="container mx-auto">
            <h2 className="text-4xl  text-black pb-6 mx-2 md:text-5x">Let's start!</h2>
                <form onSubmit={formik.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-900">Enter a date</label>
                        <input
                                type="date"
                                id="date"
                                name="date"
                                onChange={(e)=> {
                                     const timeArray = fetchAPI(new Date(e.target.value))
                                     setTimesArray(timeArray)
                                     formik.handleChange(e)
                                }
                                }
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                                placeholder="MM/DD/YYYY"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        { formik.errors.date ? <p className="mt-2 text-sm text-red-600"> {formik.errors.date} </p> : null }
                    </div>
                    <div className="form-group relative pt-6">
                        <label htmlFor="time" className="block mb-2 text-md font-medium text-gray-900">Available Times</label>
                        <select
                                id="time"
                                name="time"
                                placeholder="Select a date to see available times"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            { times.length === 0 || formik.errors.date   ? <option value="Select a date to see available times">Select a date to see available times</option> : times.map(time=> (<option key={time} value={time}>{time}</option>))}
                        </select>
                    </div>
                    <div className="form-group pt-6">
                        <label htmlFor="guests" className="block mb-2 text-md font-medium text-gray-900">Number of Guests</label>
                        <input
                                type="text"
                                id="guests"
                                name="guests"
                                placeholder="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.guests}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formik.touched.guests && formik.errors.guests ? <p className="mt-2 text-sm text-red-600"> {formik.errors.guests} </p> : null }
                    </div>
                    <div className="form-group relative mb-6 pt-6">
                        <label htmlFor="occasion" className="block mb-2 text-md font-medium text-gray-900">Occasion</label>
                        <select
                                id="occasion"
                                name="occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="celebration">Celebration</option>
                            <option value="first-time">First Time</option>
                            <option value="business">Business Meeting</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-2 px-8 rounded-lg">Book Now!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}