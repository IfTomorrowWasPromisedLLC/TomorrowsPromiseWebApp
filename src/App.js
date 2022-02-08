import "./App.css";
import {Routes, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/Themes/useDarkMode"
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import Toggle from "./components/Themes/Toggler"
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles></GlobalStyles>
      <Navbar />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" />
        <Route path="/products" />
        <Route path="/pricing" />
        <Route path="/faq" />
        <Route path="/account" element={ <Account/> } />

      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}
