import React, { useState, useEffect } from 'react';
import AnimalList from './components/AnimalList';
import FilterForm from './components/FilterForm';
import './styles/styles.css';

const App = () => {
  const [animales, setAnimales] = useState([]);
  const [filteredAnimales, setFilteredAnimales] = useState([]);
  const [filtros, setFiltros] = useState({ tipo: '', region: '', estado: 'adopcion' });

  // Llamada a la API para obtener los datos
  useEffect(() => {
    const fetchAnimales = async () => {
      try {
        const response = await fetch('https://huachitos.cl/api/animales');
        const data = await response.json();
        setAnimales(data.data);
        setFilteredAnimales(data.data); // Inicialmente mostramos todos
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
    fetchAnimales();
  }, []);

  // Función para aplicar los filtros
  const handleFilter = (filters) => {
    const { tipo, genero, region, esterilizado, vacunas } = filters;
  
    const filtrados = animales.filter(animal => 
      (tipo ? animal.tipo === tipo : true) &&
      (genero ? animal.genero === genero : true) &&
      (region ? animal.region === region : true) &&
      (esterilizado !== '' ? animal.esterilizado === parseInt(esterilizado) : true) &&
      (vacunas !== '' ? animal.vacunas === parseInt(vacunas) : true)
    );
    
    setFilteredAnimales(filtrados);
  };
  

  return (
    <div className="app">
      <h1>Adopta un Amigo Peludo</h1>
      <FilterForm onFilter={handleFilter} />
      <AnimalList animales={filteredAnimales} />
    </div>
  );
};

export default App;
