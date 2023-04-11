import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home'
import ErrorPage from './Component/ErrorPage'
import ShowData from './Component/ShowData/ShowData'
import ViewDetails from './Component/ViewDetails/ViewDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
        path:"/",
        element:<ShowData></ShowData>,
        loader:()=>fetch('jobData.json')
      },
      {
        path:'/details',
        element:<ViewDetails></ViewDetails>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
