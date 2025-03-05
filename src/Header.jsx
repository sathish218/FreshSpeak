import React from "react";
import "./App.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faEnvelope, faCircleUser } from "@fortawesome/free-solid-svg-icons"; // Import icons

function Header() {
  return (
    <section>
      <div className="Main-container">
      <div className="Logo-Name"><h3>FreshSpeak</h3></div>
      <div>  <FontAwesomeIcon  icon={faCircleUser} size="2x" className="user-icon" /></div>
       
      </div>
    
      
       
    
    </section>
  );
}

export default Header;
