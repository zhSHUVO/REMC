import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import Blog from "./Pages/Blog/Blog";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AllProducts from "./Pages/Products/AllProducts";
import ProductDetails from "./Pages/Products/ProductDetails";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Universal/Footer";
import Navbar from "./Pages/Universal/Navbar";

function App() {
    return (
        <div className="h-screen">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/allproducts"
                    element={<AllProducts></AllProducts>}
                ></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                    <Route index element={<MyOrders></MyOrders>}></Route>
                    <Route
                        path="myreviews"
                        element={<MyReviews></MyReviews>}
                    ></Route>
                    <Route
                        path="myprofile"
                        element={<MyProfile></MyProfile>}
                    ></Route>
                    <Route
                        path="manageorders"
                        element={<ManageOrders></ManageOrders>}
                    ></Route>
                    <Route
                        path="addproduct"
                        element={<AddProduct></AddProduct>}
                    ></Route>
                    <Route
                        path="manageproducts"
                        element={<ManageProducts></ManageProducts>}
                    ></Route>
                    <Route
                        path="manageusers"
                        element={<ManageUsers></ManageUsers>}
                    ></Route>
                </Route>
                <Route
                    path="/portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route
                    path="/product/:id"
                    element={<ProductDetails></ProductDetails>}
                ></Route>
                <Route path="/purchase" element={<Purchase></Purchase>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
