import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Image from './assets/images/meeting-section.jpg';
import Image1 from './assets/images/createmeeting.png';
import Image2 from './assets/images/joinmeeting.jpg';





function Home(){
    return(
      <section>
        <section className='content-container'>
        <div  className='intro-section' style={{display:"flex"}}>
          <div>
            <h3 className='intro-h3' style={{fontSize:"60px"}}>Welcome!</h3><h2 style={{fontSize:"40px", color:"white"}}>Feel Free To Ask Any Questions </h2>
            </div>
          <div>
            <img src={Image} style={{height:"500px", width:"700px"}}/>
          </div>
        </div>
         

         {/* Create Meeting section */}
         <div className='create-meeting'>
         <div>
          <img src={Image1} style={{height:"700px", width:"800px"}}/>
         </div>
         <div>
          <h3>Ready to start? Create your meeting now and let FreshSpeak help you engage your participants with seamless Q&A!</h3>
          <p id='create-button'>Create Meeting</p>
         </div>
         </div>

         {/* Join the Meeting */}

         <div className='join-meeting'>
         <div>
         <h3>Join the meeting now and get involved—ask questions and engage in the discussion with FreshSpeak!</h3>
         <p id='join-button'>Join Meeting</p>
         </div>
         <div>
          
          <img src={Image2} style={{height:"700px", width:"800px"}}/>
         </div>
         </div>
        
      </section>
      </section>
    )
}
export default Home;