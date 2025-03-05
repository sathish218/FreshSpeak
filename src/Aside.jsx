import React, { useState } from 'react';
import { Home, FileText, Info,CalendarCheck,BarChart } from 'lucide-react';
import './App.css'; // Use a separate CSS file
import freshworksLogo from './assets/images/freshworks.png';

const navItems = [
  { icon: <Home size={24} />, label: 'Dashboard', description: 'View your main dashboard and analytics' },
  { icon: <FileText size={24} />, label: 'Records', description: 'Manage user accounts and permissions' },
  { icon: <Info size={24} />, label: 'About', description: 'Check your inbox and communications' },
  { icon: <CalendarCheck size={24} />, label: 'Meetings', description: 'Configure your application settings' },
  {icon:<BarChart size={24}/>, label:'Analytics',description:'To give the data ofAnalytics '}
];

function Aside() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Section */}
      <div className="logo-container">
        <img className="logo-image" src={freshworksLogo} alt="Freshspeak Logo" />
        {isExpanded && <span className="logo-text">Freshspeak</span>}
      </div>

      {/* Navigation Menu */}
      <nav className="nav">
        {navItems.map((item, index) => (
          <button key={index} className="nav-item">
            <span className="icon">{item.icon}</span>
            {isExpanded && <div className="nav-text">{item.label}</div>}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Aside;
