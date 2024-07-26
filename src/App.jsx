// cd Universo\universo
// npm run dev

import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import './App.css'
import Cabecera from './components/cabecera'
import {Filosofia, OfertaEducativa, Preescolar, Primaria, Servicios, Contacto, Talleres } from './components/contenido';
import Pie from './components/pie'
import Principal from './components/principal'



function App() {
// TODO: Borrar component "contenido.jsx"?
// Aquí se define un componente contenedor que incluye la cabecera, para eso usamos "children" que ya viene en jsx y que hace que puedas usar el componente (en este caso concabecera) como contenedor, y el props children seria todo lo que venga adentro.
const ConCabecera = ({ children }) => (
  <>
    <Cabecera /> {/* Renderizamos la cabecera */}
    <Routes>
      {children} {/* Renderizamos el contenido de la ruta */}
      </Routes>
  </>
);
return (
  <>
  {/* // TODO: hacer ruta para PRimaria y Preescolar */}
  <BrowserRouter>
    <Routes>
      {/* Ruta para la página principal sin cabecera */}
      <Route path="/" element={<Principal />} />
      
      {/* Rutas para las páginas con cabecera */}
      <Route
        path="/con/*"
        element={
          <ConCabecera>
            {/* Aqui invisible esta el componente cabecera por que al definir concabecera lo pusimos y las rutas que vienen abajo funcionarian como children, que le dice como si fuera una condicion, que debe pasar */}
            <Route path="/Filosofia" element={<Filosofia />} />
            <Route path="/Oferta" element={<OfertaEducativa />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Preescolar" element={<Preescolar />} />
            <Route path="/Primaria" element={<Primaria />} />
            <Route path="/Talleres" element={<Talleres />} />
            
          </ConCabecera>
        }
      />
    </Routes>
  </BrowserRouter>
  <footer><Pie/></footer>
    </>
)
}

export default App