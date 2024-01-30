import { } from 'react'; 
import PropTypes from 'prop-types';

const Item = ({ id, nombre, imagen, precio }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-1 border-0 ">
        {/* contenido con Link y configura la to prop */}
        <Link to={`/item/${id}`}>
          <img src={imagen} className="img-fluid" alt={nombre} />
          <div className="card-body">
            <p className="badge text-bg-dark border-bottom ">${precio}</p>
            <h6 className="fw-bold link-dark">{nombre}</h6>
            <small className="link-dark">SKU: {id}</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired
};

export default Item;