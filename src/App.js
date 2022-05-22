import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Pages/Universal/Footer";
import Navbar from "./Pages/Universal/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/allproducts"
                    element={<AllProducts></AllProducts>}
                ></Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard></Dashboard>}
                ></Route>
                <Route
                    path="/portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
