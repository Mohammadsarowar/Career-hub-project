import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './Component/ErrorPage'
import ShowData from './Component/ShowData/ShowData'
import ViewDetails from './Component/ViewDetails/ViewDetails'
import Statistics from './Component/Statistics/Statistics'
import Blog from './Component/Blog/Blog'
import Applyed from './Component/Apply/Applyed'
import { applyAndJobData } from './loader/getApply_JobData'
import Apply from './Component/Apply/Apply'
import FullTime from './Component/FindJob/FullTime'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
        path:"/",
        element:<ShowData></ShowData>,
        loader:()=>fetch('/jobData.json')
      },
      {
        path:'details/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch("/jobData.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>,
        loader:() =>fetch('/marks.json')
        
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/applied",
        element:<Apply></Apply>,
        loader:applyAndJobData
      },
      {
        path:'/fulltime',
        element:<FullTime></FullTime>,
        loader:()=>fetch('/jobData.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
