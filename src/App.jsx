
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainArea from './components/MainArea'

function App() {


  return (
    <>
      <Navbar></Navbar>
   <Outlet></Outlet>
   {/* <MainArea></MainArea> */}
   <Footer></Footer>
    
    </>
  )
}

export default App
