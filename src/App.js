// App.js

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminHome from './components/adminhome/adminhome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Error from './components/Error/Error';
import UploadData from './components/UploadData/uploadData';
import RootLayout from './components/RootLayout/RootLayout';
import UserHome from './components/UserHomePage/UserhomePage';
import AyReport from './components/AyReport/AyReport';

function App() {

  const router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<UserHome />
        },
        {
          path:'/error',
          element:<Error />
        },
        {
          path:'/upload',
          element:<UploadData />,
          
        },
        {
          path:'admin',
          element:<AdminHome />
        },
        {
          path:'/ay-report',
          element:<AyReport />
        }
      ],
    },
    {
      path:'/signup',
      element:<Signup />
    },
    {
      path:'/signin',
      element: <Login />
    },
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App