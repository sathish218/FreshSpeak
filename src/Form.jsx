import React from 'react'
import './App.css'

function Form(){
    return (
        <section>
            <h3>CREATE MEETING</h3>
           <section className="form-section">
    <form className="meeting-form">
        <div className="form-group">
            <label>Meeting Name:</label>
            <input type="text" placeholder="Enter meeting name" />
        </div>
        <div className="form-group">
            <label>Description:</label>
            <textarea placeholder="Enter meeting description"></textarea>
        </div>
        <div className="form-group">
            <button type="submit" className="create-button">Create Meeting</button>
        </div>
    </form>
</section>

        </section>
    )
}
export default Form


