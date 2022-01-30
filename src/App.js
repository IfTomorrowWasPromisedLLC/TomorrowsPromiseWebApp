import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}
