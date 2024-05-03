import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterProduct.css'; // CSS file for styles

function RegisterProduct() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Alta de productos</h1>
      <div id="botones">
        <p id='p-inventario' onClick={() => navigate("/inventory")}>Atras</p>
        <p id='p-menu' onClick={() => navigate("/menu")}>Menu</p>
      </div>

      <form id="altaProductoForm">
        <div>
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" min="0" step="0.01" required />
        </div>
        <div>
          <label htmlFor="numeroSerie">Número de Serie:</label>
          <input type="text" id="numeroSerie" name="numeroSerie" required />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <input type="text" id="categoria" name="categoria" required />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" min="0" required />
        </div>
        <div>
          <button type="submit" id="btnGuardar">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterProduct;
