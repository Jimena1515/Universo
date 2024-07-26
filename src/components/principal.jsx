import { useEffect } from "react";
import { Link } from "react-router-dom"


function Principal() {
// Funcion para que al scrollear desaparezca la imagen
  // useEffect(()=>{
  //   const miHeaderPrin = document.getElementById("miHeaderPrin");
  //   const mainPrin = document.getElementById("mainPrin");
  //   window.addEventListener("scroll", function(){
  //     const desplazamientoActual=window.scrollY

  //     if (desplazamientoActual > 0) {
  //       miHeaderPrin.classList.add("scrolled"); // Agregar clase al hacer scroll
  //       mainPrin.classList.add("scrolled"); // Agregar clase al hacer scroll
  //     } else {
  //       miHeaderPrin.classList.remove("scrolled"); // Remover clase cuando estamos arriba
  //       mainPrin.classList.add("scrolled"); // Agregar clase al hacer scroll

  //     }
  // });},[])
  return (
    <div id="principal">
      <header id="miHeaderPrin">
        <div id="infoDeContactoHeader" >
          {/* // TODO: ajustar los miniiconos de contacto */}

          {/* // TODO: hacer que abra en otra pestaña */}
          <div id="direccionMini"><img src="/imagenes/map-pin.svg" alt="icono de localización" className="icon1" /><a href="https://maps.app.goo.gl/KskMaoEbtUUrQHyL8">Atsimu #56</a></div>
          <div className="contactoMini"><img src="/imagenes/phone.svg" alt="icono de telefono" className="icon1" /><p>44 33 24 62 38</p></div>
          <div className="contactoMini" id="diviconMail1"><img src="/imagenes/mail.svg" alt="icono de mail" className="icon1" /><p >primaria.universo.morelia@gmail.com</p></div>
        </div> 
        <div id="barraDeNavHeader">
          <Link to="/">
            <div id="logoDiv">
             <img src="/imagenes/sistema-solar.png" alt="Logo de Universo" />
             <h1>Universo Centro Educativo</h1>
            </div>
          </Link>
          <nav id="barraNav">
          {/* // TODO: Poner un hover cool, tal vez un planetita o algo */}
          <Link to="/con/Filosofia">Nuestra filosofía</Link>
          {/* // TODO: Agregar menus desplegables a cada cosa del nav? */}
          <Link to="/con/Oferta">Oferta Educativa</Link>
          <Link to="/con/Servicios">Servicios</Link>
          <Link to="/con/Contacto">Contacto</Link>

          </nav>
        </div>
        {/*  // TODO: Revisar por que despues de cambiar varias veces de pagina las imagenes de esta no aparecen */}
          
          {/* // TODO: Cambiar el hover de preescolar y primaria */}
      </header> 
        <div id="volverArriba"></div>
      <main id="mainPrin">
        <div id="relleno"></div>
        <div id="venYCond" className="removible">
          {/* // TODO: Boton para agendar cita */}
          <h1>¡Ven y conócenos!</h1>
        </div>
        {/* // TODO: hacer un hover en el que aparezca una imagen de preeco tapando primaria cuando pases el mouse sobre preesco y viceversa, que sea en diagonal tipo https://imbc.mx/primaria/ */}
        <div id="nivelEducativo">
          <div className="nivel" id="Preescolar">
            <Link to="/con/Preescolar">Preescolar</Link>
          </div>
          <div className="nivel" id="Primaria">
            <Link to="/con/Primaria">Primaria</Link>
          </div>
        </div>
        <div id="miDivRaro">
          <div id="quieresSaber"> 
            <img id="manitasDeColores" src="../../imagenes/manos-de-colores.png" alt="Huellitas de manos de colores" />
            <div>
              <h3>¿Quieres saber mas de nuestro proyecto educativo?</h3>
              <p></p>
              {/*  // TODO:  */}
              <Link to="/con/Filosofia"><button>Más información</button></Link>
            </div>
          </div>
        </div>
        <div id="serviciosDiv">
          <h1>¿Qué ofrecemos?</h1>
          <div id="iconosServicios">
            {/* // TODO: modificar el hover, se ve el margen de los botones cuando pasas el mouse */}
            <Link to="/con/Servicios"> <button id="horarioExtendido" className="buttServicios"><img src="../../imagenes/clock.svg" alt="Reloj" /><h3>Horario extendido</h3></button></Link>
            <Link to="/con/Servicios#gruposRed"> <button id="gruposReducidos" className="buttServicios"><img src="../../imagenes/user-check.svg" alt="" /><h3>Grupos reducidos</h3></button></Link>
            <Link to="/con/talleres"><button id="sieteTalleres" className="buttServicios"><img src="../../imagenes/music.svg" alt="" /><h3>Siete talleres</h3></button></Link>
            <Link to="/con/Servicios#gruposRed"><button id="adecuacionCurr" className="buttServicios"><img src="../../imagenes/book-open.svg" alt="" /><h3>Adecuación curricular</h3></button></Link>
          </div>
        </div>
        <div id="complementoFooter"></div>
      </main>
    </div>
    
    );
  }
  
  export default Principal;
  


