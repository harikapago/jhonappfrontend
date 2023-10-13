import React,{useState} from 'react';
import logo from "../assets/logo.jpg";
import './styles/navbar.css'; // You will create this CSS file for styling
import Topse from './Topse';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"absolute",zIndex:100,width:"98.6vw"}} >
    <div className="container-fluid">
      <a className="" href="/" style={{color:"black"}}>
        <img src={logo} alt="logo" style={{ width: "3rem" }} />
        <span style={{fontSize:"20px",fontWeight:"bold"}}>MultiTech-Electronics</span>
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
            <a className="nav-link" href="#" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Services</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#partners" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Brands</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/careers" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Careers</a>
          </li> */}
         
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black", fontWeight: "bold", marginRight: "1rem" }}>
             <button className='btn btn-primary' style={{fontWeight:"bold"}}>Call now: 7995716742</button>
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
