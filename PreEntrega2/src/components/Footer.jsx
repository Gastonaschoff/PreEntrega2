import {} from 'react'
import goodvibesLogo from "../assets/goovibes.png";


function Footer() {
  return (
<footer className="d-flex flex-wrap justify-content-between align-items-center p-5 mt-4 border-top bg-dark text-light">
 
        <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
        <img src={goodvibesLogo} className="Good Vibes me-3 " alt="Good Vibes" style={{ width: "60px" }} />
        <small> © 2024 Good Vibes - Patagonia</small> 
        </a>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-twitter"></i></a></li>
        <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-instagram"></i></a></li>
        <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-facebook"></i></a></li>
      </ul>
    
    </footer>
  );
}

export default Footer;