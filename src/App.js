import './App.css';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Specials from './components/Specials';
import {Route, Routes} from "react-router-dom"
import BookingHeader from './components/booking/BookingHeader';
import NotFoundPage from './components/404/NotFoundPage';



function App() {
  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={[<Header key={"01"} />, <Specials key={"02"} />, <CustomersSay key={"03"} />,<Chicago key={"04"} />]} />
          <Route path="/booking" element={<BookingHeader/>} />
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
