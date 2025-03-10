import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PatientsPage from "@/pages/patients";
import DoctorsPage from "@/pages/doctors";
import AppointmentsPage from "@/pages/appointments";
import Register from "@/pages/register";
import Login from "@/pages/login";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PatientsPage />} path="/patients" />
      <Route element={<DoctorsPage />} path="/doctors" />
      <Route element={<AppointmentsPage />} path="/appointments" />
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
