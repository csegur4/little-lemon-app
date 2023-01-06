import {MdDeliveryDining} from 'react-icons/md'
export default function Card (props) {
    return (
        <>
           <div className="rounded overflow-hidden shadow-md hover:shadow-lg mt-8">
                <img className="w-full" src={props.url} alt={props.title} />
                <div className="px-6 py-4">
                    <div className="columns-2 mt-3 mb-5">
                        <p className="font-bold text-xl mb-2">{props.title}</p>
                        <p className="text-xl mb-2 text-right text-orange-500 ">${props.price}</p>
                    </div>
                    <p className="text-gray-700 text-base mb-5"> {props.desc}</p>
                    <div>
                         <a className="font-bold flex" href={`order?=${props.id}`}>Order a Delivery <MdDeliveryDining className='text-2xl ml-2'/></a>
                    </div>
                </div>
            </div>
        </>
    );
}