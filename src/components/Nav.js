import  Logo from './images/logo.png'

export default function Nav(){
    return(
        <nav>
            <div>
                <a href="/">
                     <img src={Logo} alt="Little Lemon Restaurant Logo" width={300}/>
                </a>
            </div>
            <div>
                <ul>
                    <li><a href="/" className="hover:text-gray-600">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-600">About</a></li>
                    <li><a href="/menu" className="hover:text-gray-600">Menu</a></li>
                    <li><a href="/reservations" className="hover:text-gray-600">Reservations</a></li>
                    <li><a href="/order-online" className="hover:text-gray-600">Order Online</a></li>
                    <li><a href="/login" className="hover:text-gray-600">Log In</a></li>
                </ul>
            </div>
        </nav>
    )
}