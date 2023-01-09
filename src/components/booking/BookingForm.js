import { useFormik } from 'formik';
import * as Yup from "yup"

export default function BookingForm(){

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = mm + '/' + dd + '/' + yyyy;

        const formik = useFormik({
            initialValues: {
                date: "",
                guests: "",
                occasion: "Birthday",
                time: "17:00"
            },
            validationSchema: Yup.object({
                date: Yup.date().typeError("Please enter a valid date, format: MM/DD/YYYY").required().min(formattedToday, "Date is too early"),
                guests: Yup.number()
                .typeError("Please enter a valid number")
                .required("Guests number is required")
                .min(1, "Number of Guests atleast 1")
                .max(10, "Maximum number of Guests is 10")
            }),
            onSubmit: (values) => {
                console.log(values)
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
                                type="text"
                                id="date"
                                name="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                                placeholder="MM/DD/YYYY"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formik.touched.date && formik.errors.date ? <p className="mt-2 text-sm text-red-600"> {formik.errors.date} </p> : null }
                    </div>
                    <div className="form-group relative pt-6">
                        <label htmlFor="time" className="block mb-2 text-md font-medium text-gray-900">Available Times</label>
                        <select
                                id="time"
                                name="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
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
                        <button type="submit" className="transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-2 px-8 rounded-lg">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}