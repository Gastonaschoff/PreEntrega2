import {} from 'react';
import Item from './Item';
import PropTypes from 'prop-types'; 


const ItemList = ({ productos }) => {
  return (
    <div className="container mt-3">
      <div className="row ">
        {productos.map(producto => (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
    productos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired
    })).isRequired
  };
  
  export default ItemList;