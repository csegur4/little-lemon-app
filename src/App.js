import './App.css';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Specials from './components/Specials';



function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
