import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="navigationDiv">
        <h1>Ashley Lee</h1>
        <div>
          <Link style={{textDecoration: "none", color: "white", fontSize: "1.5rem", fontWeight: "bold"}} to="/">Home</Link>
        </div>
        <div>
          <Link style={{textDecoration: "none", color: "white", fontSize: "1.5rem", fontWeight: "bold"}} to="/About">About</Link>
        </div>
        <div>
          <Link style={{textDecoration: "none", color: "white", fontSize: "1.5rem", fontWeight: "bold"}} to="/Projects">Projects</Link>
        </div>
        <div>
          <Link style={{textDecoration: "none", color: "white", fontSize: "1.5rem", fontWeight: "bold"}} to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
