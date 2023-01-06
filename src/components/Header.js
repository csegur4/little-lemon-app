import  DeliciusDish from './images/delicius_dish.webp'

export default function Header(){
    return(
        <header className="main-header bg-[#495e57]">
            <div className="container mx-auto justify-content">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 ">
                    <div className='md:py-28 md:pr-28 p-10 md:p-0'>
                        <h1 className="text-5xl font-bold mt-0 md:mb-5 text-[#f4c314]"> Little Lemon Restaurant</h1>
                        <h2 className="text-4xl font-bold text-white">Chicago</h2>
                        <p className="text-white mt-5 mb-10"> We are a family owned Mediterranean restaurant, focused on
                            traditional recipes served with a modern twist
                        </p>
                        <a href="/reserve-table" className='transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#333333] hover:text-white text-black font-bold py-3 px-6 rounded-lg'>Reserve a Table</a>
                    </div>
                    <div className='pb-5 md:pb-0'>
                        <img className='mx-auto md:absolute md:mt-10 rounded-2xl' src={DeliciusDish} alt="Delicius Dish in Little Lemon Restaurant" width={350}/>
                    </div>
                </div>
            </div>
        </header>
    )
}