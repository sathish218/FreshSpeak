import React from 'react'
import './App.css'
import Image2 from './assets/images/meeting.svg';
import Image3 from './assets/images/join.svg';
import Image4 from './assets/images/file.svg';
import { Link } from 'react-router-dom';


function Home(){
    return(
      <section>
        <main className='container-section'>
        <section className='main-section'>
          {/* this is the aside section  */}
          
          <div className='Containers'>
          <Link to={"form"}>
            <div >
              <h3> Create Meeting</h3>
              <img src={Image2} style={{height:"50px"}}/>
            </div>
            </Link>

            <Link to={"join"}>
            <div>
              
              <h3>JOIN</h3>
            
              <img src={Image3} style={{height:"50px", alignItems:"center"}} />
            </div>
            </Link>

            <div>
              <h3>RECORDS</h3>
              <img src={Image4} style={{height:"50px"}}/>
            </div>
          </div>
  
          
  
  
          {/* this is the container section */}
          <div className='container-section'>
  
          </div>
        </section>
      </main>
      </section>
    )
}
export default Home;