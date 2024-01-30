import { useEffect, useState } from 'react';
import arrayProductos from "../json/productos.json";

const FetchJson = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(arrayProductos);
    }, []);  // Elimina arrayProductos del array de dependencias si no cambia

    return (
        <div className="container mt-3">
            <div className="row">
                {productos.map(({ id, nombre, imagen, precio }) => ( 
                    <div key={id} className="col-md-3">
                        <div className="card mb-1 border-0">
                            <img src={imagen} className="img-fluid" alt={nombre} />
                            <div className="card-body">
                                <p className="badge text-bg-dark border-bottom ">${precio} </p>
                                <h6 className="fw-bold">{nombre}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchJson;