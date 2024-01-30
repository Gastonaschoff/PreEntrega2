import { useEffect, useState } from 'react';
import Item from './Item';
import productos from '../json/productos.json'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      // Verificar si el itemId es un número válido
      if (!isNaN(itemId)) {
        setTimeout(() => {
          try {
            // Buscar el producto en el JSON por id
            const foundProduct = productos.find(producto => producto.id === parseInt(itemId));
            if (foundProduct) {
              setProduct(foundProduct);
            } else {
              setError(new Error('Producto no encontrado'));
            }
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }, 2000);
      } else {
        setError(new Error('ID de producto no válido'));
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Item
        id={product.id}
        nombre={product.nombre}
        imagen={product.imagen}
        precio={product.precio}
      />
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;