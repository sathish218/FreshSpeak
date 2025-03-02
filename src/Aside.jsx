import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function Aside(){
    return(
        <aside className='aside-section'>
        <div>
         <h2 style={{textAlign:"center", padding:"10px"}}>MENU</h2>
        </div>
        <div className='aside-section-h3' style={{display:"flex", flexDirection:"column",textAlign:"center", gap:"30px", margin:"10px", color:"white"}}>
        <Link to={""}>
         <h3>Home</h3>
         </Link>
         <Link>
         <h3>ABOUT</h3>
         </Link>
         <h3>MEET-UP</h3>
        </div>
      </aside>
    )
}
export default Aside;
 