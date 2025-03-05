import React from 'react'
import './App.css'


function Join(){
   return (
    <section>
        <section className='meeting-section'>
      <div>
        <label className="meeting-code-input" for="meeting-code">Meeting Code:</label>
        <input type='text' for="meeting-code"></input>
        </div>   

        <div>
            <button className='meeting-code-submit' type="submit">Join the Meeting</button>
        </div>
     
        </section>
    </section>
   )
}
export default Join;