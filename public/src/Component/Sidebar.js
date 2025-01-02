import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src="user-image.png" alt="User Profile" />
        <div className="user-info">
          <h3>Olivia Rhye</h3>
          <p>olivia@untitledui.com</p>
        </div>
      </div>

      <ul className="sidebar-list">
        <li>
          <span className="icon">&#9786;</span> 
          <a href="#">View profile</a>
          <span className="shortcut">⌘K → P</span>
        </li>
        <li>
          <span className="icon">&#9881;</span>
          <a href="#">Settings</a>
          <span className="shortcut">⌘S</span>
        </li>
        <li>
          <span className="icon">&#128279;</span>
          <a href="#" onClick={toggleDropdown}>
            Keyboard shortcuts 
            <span className="dropdown-arrow">▼</span> 
          </a>
          <ul className="dropdown-menu" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            <li>⌘K → P: View Profile</li>
            <li>⌘S: Settings</li>
            {/* Add more shortcuts here */}
          </ul>
        </li>
        <li>
          <span className="icon">&#128187;</span>
          <a href="#">Company profile</a>
          <span className="shortcut">⌘K → C</span>
        </li>
        {/* ... other list items ... */}
      </ul>
    </div>
  );
};

export default Sidebar;