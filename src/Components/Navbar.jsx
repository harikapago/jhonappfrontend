import React,{useState} from 'react';

import './styles/navbar.css'; // You will create this CSS file for styling
import Topse from './Topse';
import as from"../assets/as.gif";

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",zIndex:100,width:"100%"}} >
    <div className="container-fluid">
      <a className="" href="/" style={{color:"black"}}>
        <img src={as} alt="logo" style={{ width: "3rem",height:"2.5rem",borderRadius:"150px" }} />
        <span style={{fontSize:"20px",fontWeight:"bold"}}><span style={{color:"blue"}}>MultiTech</span>-Electronics</span>
      </a>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`}
          id="navbarNav"
        >
      <div className="flex-fill"></div>
  
      <div className="navbar-collapse " id="navbarNav">
      <div className="flex-fill"></div>
      
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="#home" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Home</a>
          </li>
        <li className="nav-item">
            <a className="nav-link" href="#AboutUs" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#our-services" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Services</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#brands" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Brands</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Reviews</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#contact-us" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>
            <a href="tel:7995716742" className='btn btn1'>Call Now : 7995716742</a>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  
  </div>
    );
  };
export default Navbar;
