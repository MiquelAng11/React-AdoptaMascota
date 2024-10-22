import React, { useState } from 'react';

const AnimalCard = ({ animal }) => {
  const [showForm, setShowForm] = useState(false);
  const [adopted, setAdopted] = useState(false);

  const handleAdoptClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAdopted(true);
    setShowForm(false);  // Cerrar el formulario
    // Aquí puedes manejar la lógica de enviar los datos del formulario a la API si lo necesitas
  };

  return (
    <div className="animal-card">
      <img src={animal.imagen} alt={animal.nombre} />
      <h2>{animal.nombre}</h2>
      <p><strong>Tipo:</strong> {animal.tipo}</p>
      <p><strong>Edad:</strong> {animal.edad}</p>
      <p><strong>Descripción:</strong> {animal.desc_fisica}</p>
      <p><strong>Personalidad:</strong> {animal.desc_personalidad}</p>
      <p><strong>Comuna:</strong> {animal.comuna}</p>
      
      <button onClick={handleAdoptClick} className="adopt-button">Adoptar</button>
      
      {showForm && (
        <form onSubmit={handleFormSubmit} className="adoption-form">
          <h3>Formulario de Adopción</h3>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Dirección:
            <input type="text" name="direccion" required />
          </label>
          <button type="submit">Enviar Solicitud</button>
        </form>
      )}
      
      {adopted && <div className="adopt-popup">¡Gracias por adoptar a {animal.nombre}!</div>}
    </div>
  );
};

export default AnimalCard;
