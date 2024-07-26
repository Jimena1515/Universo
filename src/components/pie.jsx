function Pie(){
    return(
      <>
        
        <div className="textFooters">
          <a className="textFooter" href="#volverArriba">Volver arriba</a>
          <p className="textFooter">© 2023 Universo Centro Educativo. Todos los derechos reservados.</p>
          <p className="textFooter">Atsimu #56, Col. Bosques Camelinas</p>
        </div>
        <div id="pieCentro">
          <img id="logoUniversoBlanco" src="../../imagenes/universo-fondo-blanco.jpg" alt="logo de universo" />
          <h3>Universo es una escuela humanista constructivista incluyente con 30 años de experiencia, que atiende el ritmo que cada niño o niña necesita. </h3>
        </div>
        <div id="siguenos">
          <h2>¡Síguenos en Facebook!</h2>
          <nav id="redesSociales">
            <a href="https://www.facebook.com/universocentroeducativo/"><img className="imgRS" src="../../imagenes/facebook.svg" alt="Facebook" /></a>
          </nav>
        </div>
        </>    )
}
export default Pie;