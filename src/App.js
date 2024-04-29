import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Desktop } from "./desktop";
import { Register } from "./desktop/register";
import { ContactUp } from "./desktop/contactup";
import { Contact_Us } from "./desktop/contact_us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="flexersignup" element={<Register />} />
        <Route path="clientHire" element={<ContactUp />} />
        <Route path="contact" element={<Contact_Us />}/>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
