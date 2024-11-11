import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/login";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
