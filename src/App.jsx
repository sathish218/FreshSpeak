import Header from "./Header"
import Home from './Home';
import Footer from "./footer";
import Aside  from "./aside";
import "./App.css";
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
    <Header/>
    <div style={{display:"flex"}}>
    <Aside/>
    <Outlet/>
    </div>
    
   
   <Footer/>

    
    </>
  )
}

export default App
