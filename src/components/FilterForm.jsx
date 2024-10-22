import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [tipo, setTipo] = useState('');
  const [genero, setGenero] = useState('');
  const [region, setRegion] = useState('');
  const [esterilizado, setEsterilizado] = useState('');
  const [vacunas, setVacunas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ tipo, genero, region, esterilizado, vacunas });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Todos</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>
      </label>
      <label>
        Género:
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Ambos</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
      </label>
      <label>
        Región:
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Todas</option>
          <option value="RM">Región Metropolitana</option>
          <option value="Valparaíso">Valparaíso</option>
          {/* Añade más regiones según los datos que aparezcan en la API */}
        </select>
      </label>
      <label>
        Esterilizado:
        <select value={esterilizado} onChange={(e) => setEsterilizado(e.target.value)}>
          <option value="">Todos</option>
          <option value="1">Sí</option>
          <option value="0">No</option>
        </select>
      </label>
      <label>
        Vacunas:
        <select value={vacunas} onChange={(e) => setVacunas(e.target.value)}>
          <option value="">Todos</option>
          <option value="1">Sí</option>
          <option value="0">No</option>
        </select>
      </label>
      <button type="submit">Aplicar Filtros</button>
    </form>
  );
};

export default FilterForm;
