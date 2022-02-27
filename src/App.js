import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/Themes/useDarkMode";
import { lightTheme, darkTheme } from "./components/Themes/Themes";
import Toggle from "./components/Themes/Toggler";
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";

export default function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles></GlobalStyles>
      <Navbar />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
