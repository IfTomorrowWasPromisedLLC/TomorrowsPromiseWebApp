import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Auth from './components/Auth/Auth';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  </BrowserRouter>
);
}

function Home(){
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
}
