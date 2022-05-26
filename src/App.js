import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import RequireAdmin from "./Pages/Account/RequireAdmin";
import RequireAuth from "./Pages/Account/RequireAuth";
import UpdateProfile from "./Pages/Account/UpdateProfile";
import Blog from "./Pages/Blog/Blog";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews";
import Purchase from "./Pages/Dashboard/Purchase";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AllProducts from "./Pages/Products/AllProducts";
import ProductDetails from "./Pages/Products/ProductDetails";
import Footer from "./Pages/Universal/Footer";
import Navbar from "./Pages/Universal/Navbar";
import NotFound from "./Pages/Universal/NotFound";

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
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        path="myorders"
                        element={
                            <RequireAuth>
                                <MyOrders></MyOrders>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="myreviews"
                        element={
                            <RequireAuth>
                                <MyReviews></MyReviews>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="addreview"
                        element={
                            <RequireAuth>
                                <AddReview></AddReview>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="purchase/:id"
                        element={
                            <RequireAuth>
                                <Purchase></Purchase>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        index
                        // path="myprofile"
                        element={
                            <RequireAuth>
                                <MyProfile></MyProfile>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/:usermail"
                        element={
                            <RequireAuth>
                                <UpdateProfile></UpdateProfile>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="manageorders"
                        element={
                            <RequireAdmin>
                                <ManageOrders></ManageOrders>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="addproduct"
                        element={
                            <RequireAdmin>
                                <AddProduct></AddProduct>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageproducts"
                        element={
                            <RequireAdmin>
                                <ManageProducts></ManageProducts>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageusers"
                        element={
                            <RequireAdmin>
                                <ManageUsers></ManageUsers>
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>
                <Route
                    path="/portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route
                    path="/product/:id"
                    element={
                        <RequireAuth>
                            <ProductDetails></ProductDetails>
                        </RequireAuth>
                    }
                ></Route>

                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <Toaster />
        </div>
    );
}

export default App;
