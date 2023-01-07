import { useState, useCallback, useEffect } from "react";
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

  const [y, setY] = useState(window.scrollY);
  const [effect, setEffect] = useState('');

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY ) {
        setEffect('fade-in');
      } else if (y < window.scrollY && window.scrollY >= 200 ) {
        setEffect('fade-out');
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <Nav animation={effect} />
      <Routes>
          <Route path="/" element={[<main key={"00"}>
                                      <Header key={"01"}  />
                                      <Specials key={"02"} />
                                      <CustomersSay key={"03"} />
                                      <Chicago key={"04"} />
                                    </main>]}
          />
          <Route path="/booking" element={<BookingHeader/>} />
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
