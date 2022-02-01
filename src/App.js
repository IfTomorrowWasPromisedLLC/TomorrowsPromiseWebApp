import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/Themes/useDarkMode"
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import Toggle from "./components/Themes/Toggler"
import { GlobalStyles } from "./components/GlobalStyles";
import Auth from "./components/Auth/Auth";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles></GlobalStyles>
      <Navbar />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </ThemeProvider>
  );
}
