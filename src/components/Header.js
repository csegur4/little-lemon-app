import  DeliciusDish from './images/delicius_dish.png'

export default function Header(){
    return(
        <header>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-2 ">
                    <div>
                        <h1> Little Lemon Restaurant</h1>
                        <h2>Chicago</h2>
                        <p> We are a family owned Mediterranean restaurant, focused on
                            traditional recipes served with a modern twist
                        </p>
                        <a href="/reserve-table">Reserve a Table</a>
                    </div>
                    <div>
                        <img src={DeliciusDish} alt="Delicius Dish in Little Lemon Restaurant" width={350}/>
                    </div>
                </div>
            </div>
        </header>
    )
}