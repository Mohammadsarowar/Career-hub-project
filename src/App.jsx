import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeHeader from './Component/HomeHeader/HomeHeader'
import { Outlet } from 'react-router-dom'
import List from './Component/List/List'
import ShowData from './Component/ShowData/ShowData'
import Cart from './Component/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <HomeHeader></HomeHeader>
     <Outlet></Outlet>
     <List></List>
    
    </div>
  )
}

export default App
