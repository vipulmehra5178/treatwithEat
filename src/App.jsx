import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/about';
import ReservationForm from './pages/ReservationForm';
import Availability from './pages/Availability';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<ReservationForm />} />
        <Route path="/about" element={<About />} />
        <Route path='/availability' element={<Availability />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
    