/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
import './App.css';
import Rutas from './router/rutas';
import CV from './componentes/CV';
import Header_nav from './componentes/layout/Header_nav';


function App() {

  return (
    <div className='layout'>
      <Rutas />
    </div>
  );
}

export default App;
