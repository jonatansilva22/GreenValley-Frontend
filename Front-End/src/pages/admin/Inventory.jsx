import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Inventory.css'; // Archivo CSS para estilos

function Inventory() {
  const navigate = useNavigate(); // Declara navigate

  // Function to display the inventory
  function displayInventory() {
    const inventory = [
      { id: 1, name: "Product 1", quantity: 10 },
      { id: 2, name: "Product 2", quantity: 20 },
      { id: 3, name: "Product 3", quantity: 30 }
    ];

    const inventoryContainer = document.getElementById('inventory-container');

    inventoryContainer.innerHTML = '';

    inventory.forEach(function (product) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = product.id;

      const label = document.createElement('label');
      label.appendChild(document.createTextNode(product.name + ' - Quantity: ' + product.quantity));

      const br = document.createElement('br');

      inventoryContainer.appendChild(checkbox);
      inventoryContainer.appendChild(label);
      inventoryContainer.appendChild(br);
    });
  }

  // Function to handle the click event of the "Delete" button
  function handleClickDelete() {
    const selectedProduct = document.querySelectorAll('#inventory-container input[type="checkbox"]:checked');
    if (selectedProduct.length === 0) {
      alert("Favor de seleccionar un producto");
    } else {
      const confirmation = window.confirm("¿Seguro que quiere dar de bnaja este producto?");
      if (confirmation) {
        alert("Producto dado de baja exitosamente.");
      } else {
        alert("Operacion cancelada.");
      }
    }
  }

  // Call the displayInventory function when the page loads
  useEffect(() => {
    displayInventory();
  }, []);

  return (
    <div>
      <h1>Inventario</h1>
      <div>
        <div id="btnHome">
          <p id='p-menu' onClick={() => navigate('/menu')}>Menu</p> {/* Utiliza navigate() */}
        </div>
        <div id="inventory-container">
          {/* Inventory content goes here */}
        </div>
        <br />
        <button id="btnBaja" onClick={handleClickDelete}>Dar de baja</button>
        <button id="btnAlta" onClick={() => navigate('/register')}>Alta de productos</button> {/* Utiliza navigate() */}
      </div>
    </div>
  );
}

export default Inventory;
