
import Aside  from "./aside";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./home";
import Footer from "./footer";




function App() {

  return (
    <>
    {/* <Header/>
    <div style={{display:"flex"}}>
    <Aside/>
    <Outlet/>
    </div> */}
    {/* <Home/> */}
    <Header/>
    <Aside/>
    <Home/>
    <Footer/>
    
   
  

    
    </>
  )
}

export default App
