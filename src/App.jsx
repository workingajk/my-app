// import './App.css'

import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Pnf from "./pages/Pnf";
import ProductView from "./pages/ProductView";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <Header />
            {/* <h1>hello App</h1> */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product/:id" element={<ProductView />} />
                <Route path="*" element={<Pnf />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
