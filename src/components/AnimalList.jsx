import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalList = ({ animales }) => {
  return (
    <div className="animal-list">
      {animales.length > 0 ? (
        animales.map(animal => <AnimalCard key={animal.id} animal={animal} />)
      ) : (
        <p>No hay animales disponibles con los filtros seleccionados.</p>
      )}
    </div>
  );
};

export default AnimalList;
