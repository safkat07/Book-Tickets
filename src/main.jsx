import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import CardDetails from "./Components/CardDetails/CardDetails";
import FeatureArtistDetails from "./Pages/FeatureArtistDetails/FeatureArtistDetails";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Blog from "./Components/Blog/Blog";
import ContactUs from "./Components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/apiData.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/card/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("/apiData.json"),
      },
      {
        path: "/featureArtistDetails",
        element: <FeatureArtistDetails></FeatureArtistDetails>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
