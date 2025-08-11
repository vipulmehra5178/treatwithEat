import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/about";
import ReservationForm from "./pages/reservationForm";
import Reservations from "./pages/Reservations";
import Menu from "./pages/Menu";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />}/>
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservation-form" element={<ReservationForm />} />{" "}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
