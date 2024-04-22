import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Desktop } from "./desktop";
import { Register } from "./desktop/register";
import { ContactUp } from "./desktop/contactup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="register" element={<Register />} />
        <Route path="contactus" element={<ContactUp />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
