import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/home";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import CheckOut from "../pages/books/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/ManageBooks";
import AddBook from "../pages/dashboard/AddBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";

const RouterComponents = () => {
  const location = useLocation();

  const hiddenNavbarFooter =
    location.pathname !== "/login" && location.pathname !== "/register";
  const hiddenNavbar =
    location.pathname !== "/admin" &&
    location.pathname !== "/dashboard" &&
    location.pathname !== "/dashboard/manage-books" &&
    location.pathname !== "/dashboard/add-new-book" &&
    !location.pathname.startsWith("/dashboard/edit-book");
  return (
    <>
      {hiddenNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          }
        >
          <Route
            path=""
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />

          <Route
            path="add-new-book"
            element={
              <AdminRoute>
                <AddBook />
              </AdminRoute>
            }
          />
          <Route
            path="edit-book/:id"
            element={
              <AdminRoute>
                <UpdateBook />
              </AdminRoute>
            }
          />
          <Route
            path="manage-books"
            element={
              <AdminRoute>
                <ManageBooks />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
      {hiddenNavbarFooter && hiddenNavbar && <Footer />}
    </>
  );
};

export default RouterComponents;
