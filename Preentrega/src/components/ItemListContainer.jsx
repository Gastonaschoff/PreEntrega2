import  { useState, useEffect } from 'react';
import ItemList from './ItemList';
import arrayProductos from '../json/productos.json';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //  API con retardo
    setTimeout(() => {
      setProductos(arrayProductos);
    }, 2000);
  }, []);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;