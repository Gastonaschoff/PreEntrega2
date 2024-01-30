import { } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Buscador />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;