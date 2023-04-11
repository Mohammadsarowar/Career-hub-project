import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home'
import ErrorPage from './Component/ErrorPage'
import HomeHeader from './Component/HomeHeader/HomeHeader'
import ShowData from './Component/ShowData/ShowData'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:"/statistics",
        element:<ShowData></ShowData>,
        loader:()=>fetch('jobData.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
