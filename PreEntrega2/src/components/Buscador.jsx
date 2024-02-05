import {} from 'react';

function Buscador() {
  return (
    <div className="container-fluid bg-dark">
        <div className="container">
      <div className="row justify-content-center">
        
          <div className="input-group mb-3">
            <input type="text" className="form-control rounded-start " placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon2" />
            <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buscador;