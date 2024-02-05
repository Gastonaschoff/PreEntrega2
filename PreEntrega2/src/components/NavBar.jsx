import { Link } from 'react-router-dom';
import goodvibesLogo from "../assets/goovibes.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="p-2 navbar-brand" to="/">
          <img src={goodvibesLogo} className="Good Vibes" alt="Good Vibes" style={{ width: "110px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/materos">
                Termos y Mates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buzos">
                Buzos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/remeras">
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/camisas">
                Camisas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sombreros">
                Sombreros
              </Link>
            </li>
          </ul>

          <span className="d-none d-sm-block me-5">
            <span className="btn btn-dark position-relative">
              <Link
                className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
                to="/carrito"
              >
                <i className="fa fa-shopping-cart" style={{ fontSize: '15px', transformOrigin: '0.5625em 0.5em' }}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;