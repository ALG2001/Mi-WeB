
import './index_mobile.css'
import Fondo from '../src/componentes/Fondo_ola';
import Rutas from '../src/router/rutas';
import { useState } from 'react';
// import PantallaCarga from './componentes/Pantalla_carga';

function App() {

  const [fondo, setfondo] = useState(0xc0c0e);
  const [icon_color, set_icon_color] = useState("primary:#ffffff");

  return (
    <div className='layout'>

      <Fondo fondo={fondo} />
      <Rutas setfondo={setfondo} icon_color={icon_color} set_icon_color={set_icon_color} />
    </div>
  );
}

export default App;
