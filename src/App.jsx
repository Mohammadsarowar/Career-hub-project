import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeHeader from './Component/HomeHeader/HomeHeader'
import { Outlet } from 'react-router-dom'
import List from './Component/List/List'
import ShowData from './Component/ShowData/ShowData'
import Cart from './Component/Cart/Cart'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header></Header>
     <div className="min-h-[calc(100vh-137px)]">
      <Outlet />
     </div>
     <Footer></Footer>
     
    
    </div>
  )
}

export default App
