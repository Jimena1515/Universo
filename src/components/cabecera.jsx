import { Link } from "react-router-dom"
import { useEffect } from "react";



function Cabecera() {
  // Aqui abajo un useEffect con una funcion para que desaparezca la infodecontactoheader al scrollear)
  useEffect(() => {
    const infoDeContactoHeader = document.getElementById("infoDeContactoHeader");
    const barraDeNavHeader = document.getElementById("barraDeNavHeader");
    const miHeader1 = document.querySelector("header#miHeader1");
// TODO: Revisar por que hace ese parpadeo raro el header al scrollear
window.addEventListener("scroll", function() {
      const desplazamientoActual = window.scrollY;

      if (desplazamientoActual === 0) {
        infoDeContactoHeader.style.top = "0"; // Mostrar la barra cuando estamos en la parte superior
        barraDeNavHeader.style.paddingTop= "45px"
        miHeader1.style.height= "200px"
      } else {
        infoDeContactoHeader.style.top = "-50px"; // Ocultar la barra cuando no estamos en la parte superior
        barraDeNavHeader.style.paddingTop= "0"
        miHeader1.style.height= "160px"

      }
    });
  }, []); // El segundo argumento del useEffect es un array vacío, lo que significa que este efecto se ejecutará solo una vez después de que se monte el componente
    return(
      <>
<header id="miHeader1">
  <div id="infoDeContactoHeader" >

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
    </div></Link>
    <nav id="barraNav">
      {/* // TODO: Poner un hover cool, tal vez un planetita o algo */}
      <Link to="/con/Filosofia">Nuestra filosofía</Link>
      {/* // TODO: Agregar menus desplegables a cada cosa del nav? */}
      <Link to="/con/Oferta">Oferta Educativa</Link>
      <Link to="/con/Servicios">Servicios</Link>
      <Link to="/con/Contacto">Contacto</Link>

    </nav>
  </div>
  
</header>
  <div id="volverArriba"></div>
</>
    )
}
export default Cabecera;