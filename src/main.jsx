import ReactDOM from 'react-dom/client';
import { createBrowserRouter, BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import HomeLayout from './Components/layout/HomeLayout';
import Login from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import EasyMethod from './Components/protected-routes/EasyMethod';
import UserLayout from './Components/layout/UserLayout';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPages';
import InquiryPage from './Pages/InquiryPage';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    element: (
      <HomeLayout/>
    ),
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path:"/signup",
        element: <SignupPage/>
      }
    ]
  },
  {
    element : (
      <EasyMethod>
        <UserLayout/>
      </EasyMethod>
    ),
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/product",
        element: <ProductPage/>
      },
      {
        path: "/inquiry",
        element: <InquiryPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer position='top-center' />
  </React.StrictMode>
)