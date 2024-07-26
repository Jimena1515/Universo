import { Link } from 'react-router-dom';

function Filosofia(){
    return(
      // TODO: por que no entra y aparece hasta arriba? cuando entras a la pagina aparece a la mitaad
        <main id="mainFilosofia">
          <div id="introFilosofia"><h3>Nuestra filosofía se basa en el respeto y la valoración de la dignidad y el potencial humano. </h3>
          </div>
          <div id="misionVision">
            <div id="mision" className="misVis">
              <h2>Misión</h2>
              <p>Nuestra misión es proporcionar una educación integral que fomente el crecimiento académico, social, emocional y ético de nuestros estudiantes. Nos comprometemos a crear un entorno inclusivo y colaborativo donde cada individuo se sienta valorado y respetado. A través de un enfoque educativo centrado en el desarrollo humano, buscamos cultivar el pensamiento crítico, la creatividad y la empatía, preparando a nuestros estudiantes para ser ciudadanos responsables y comprometidos, capaces de enfrentar los desafíos del mundo con confianza y compasión.</p>
            </div>
            <div id="vision" className="misVis">
              <h2>Visión</h2>
              <p>Nuestra visión es ser una comunidad educativa que nutra el amor por el aprendizaje y el respeto por la diversidad. Imaginamos una escuela donde cada estudiante se sienta inspirado y apoyado para alcanzar su máximo potencial, desarrollando habilidades para la vida y el pensamiento crítico. Aspiramos a ser un referente en educación inclusiva y colaborativa, donde la innovación y la excelencia se conjugan con la empatía y la solidaridad, formando ciudadanos responsables y comprometidos con la construcción de un mundo más justo y equitativo.            </p>
            </div>
          </div>
        
        </main>
    )
}



function OfertaEducativa(){
  return(
<main id="ofertaEducativa">
    <section id="intro">
    <p>En nuestra institución, ofrecemos una educación de calidad con atención personalizada en un entorno inclusivo y colaborativo. Contamos con un solo grupo por cada grado en preescolar y primaria, lo que nos permite mantener un ambiente acogedor y centrado en cada niño o niña.</p>    </section>

    <div className="preescPrimaria">
      <h2>Preescolar</h2>
      <p>Nuestros grupos reducidos en preescolar garantizan que cada niño reciba la atención y el apoyo necesarios para su desarrollo integral.</p>
      <p>Fomentamos la inclusión y el respeto por la diversidad, donde todos los niños son bienvenidos y valorados.</p>
      <Link to="/con/Preescolar"><button className='botonOfertaEducativa'>Más información de preescolar</button></Link>
      </div>

    <div className="preescPrimaria">
      <h2>Primaria</h2>
      <p>En primaria, nuestros grupos reducidos facilitan una enseñanza personalizada y un seguimiento cercano del progreso de cada estudiante.</p>
      <p>Promovemos un ambiente inclusivo preparando a nuestros alumnos y alumnas para que desarrollen responsabilidad y empatía. Impulsamos la reflexión y el desarrollo de un criterio propositivo que les permita tomar decisiones informadas y actuar con integridad en diversos contextos.</p>      <Link to="/con/Primaria"><button className='botonOfertaEducativa'>Más información de primaria</button></Link>
    </div>
  </main>
  )
}

function Preescolar(){
  return(
    <main className='mainPreescPrim'>
        <section id="introPreescolar">
          <h1>Preescolar</h1>
          <p>
            En nuestro programa de preescolar, fomentamos un ambiente cálido y estimulante donde los más pequeños pueden desarrollarse integralmente. 
            Nuestro objetivo es proporcionar una educación que nutra tanto el crecimiento académico como el social y emocional de cada niño.
          </p>
          <p>
            Creemos en la importancia de una educación temprana que se centre en el juego y el descubrimiento. 
            Los niños en esta etapa aprenden mejor cuando están involucrados activamente en actividades significativas que despiertan su curiosidad y creatividad.
          </p>
        </section>
        <section className='contenidoPreescPrim'> 
          <div id="actividadesDiarias" className='infoPreescoPrim'>
            <h2>Actividades Diarias</h2>
            <ul>
              <li>Juegos educativos y creativos</li>
              <li>Desarrollo de habilidades motoras</li>
              <li>Lectura y narración de cuentos</li>
              <li>Actividades artísticas y manualidades</li>
              <li>Exploración al aire libre y juegos en el patio</li>
            </ul>
          </div>

          <div id="infraestructuraPreescolar" className='infoPreescoPrim'>
            <h2>Infraestructura</h2>
            <p>
              Contamos con instalaciones adecuadas y seguras que incluyen:
            </p>
            <ul>
              <li>Aulas luminosas y bien equipadas</li>
              <li>Espacios de juego interiores y exteriores</li>
              <li>Material didáctico de calidad</li>
              <li>Áreas de descanso y lectura</li>
            </ul>
          </div>

          <section id="personalPreescolar" className='infoPreescoPrim'>
            <h2>Nuestro Personal</h2>
            <p>
              Nuestro equipo está compuesto por profesionales apasionados y calificados en educación infantil, quienes se dedican a proporcionar un ambiente enriquecedor y afectuoso para cada niño.
            </p>
          </section>
        </section>
        <section id="informacionAdicional">
          <h2>Más Información</h2>
          <p>
            Para más detalles sobre nuestro programa de preescolar, no dudes en contactarnos.
          </p>
          <Link to="/con/Contacto"><button className='botonOfertaEducativa'>Contactar</button></Link>
          <Link to="/con/Oferta"><button className='botonOfertaEducativa'>Volver a Oferta Educativa</button></Link>
        </section>
      </main>
  )
}

function Primaria(){
  return(    <main className="mainPreescPrim">
    <section id="introPreescolar">
      <h1>Primaria</h1>
      <p>
            En nuestro programa de primaria, proporcionamos un entorno educativo que fomenta el crecimiento académico, social y emocional de nuestros estudiantes. 
            Nuestro objetivo es ofrecer una educación integral que prepare a los niños para enfrentar los desafíos futuros con confianza y habilidades sólidas.
          </p>
          <p>
          Creemos en la importancia de una educación que combina el desarrollo académico con la enseñanza de valores y la gestión emocional. 
            Nuestros estudiantes aprenden a través de experiencias significativas y actividades que promueven el pensamiento crítico y la resolución de problemas, al tiempo que desarrollan habilidades sociales y emocionales esenciales.
          </p>
    </section>
    <section className='contenidoPreescPrim'> 
      <div id="actividadesDiarias" className='infoPreescoPrim'>
      <h2>Actividades Diarias</h2>
            <ul>
              <li>Clases interactivas y dinámicas</li>
              <li>Proyectos colaborativos</li>
              <li>Lectura y escritura</li>
              <li>Actividades artísticas y deportivas</li>
              <li>Exploración científica y tecnológica</li>
            </ul>
      </div>

      <div id="infraestructuraPreescolar" className='infoPreescoPrim'>
      <h2>Infraestructura</h2>
            <p>
              Contamos con instalaciones adecuadas y seguras que incluyen:
            </p>
            <ul>
              <li>Aulas modernas y equipadas con tecnología</li>
              <li>Laboratorios de ciencias y tecnología</li>
              <li>Biblioteca con recursos actualizados</li>
              <li>Áreas de juego y deportivas</li>
            </ul>
          </div>

      <section id="personalPreescolar" className='infoPreescoPrim'>
        <h2>Nuestro Personal</h2>
        <p>
        Nuestro equipo está compuesto por educadores dedicados y experimentados, comprometidos con el desarrollo integral de cada estudiante. 
              Nos enfocamos en crear un ambiente de aprendizaje positivo y motivador.
            </p>
      </section>
    </section>
    <section id="informacionAdicional">
      <h2>Más Información</h2>
      <p>
        Para más detalles sobre nuestro programa de primaria, no dudes en contactarnos.
      </p>
      <Link to="/con/Contacto"><button className='botonOfertaEducativa'>Contactar</button></Link>
      <Link to="/con/Oferta"><button className='botonOfertaEducativa'>Volver a Oferta Educativa</button></Link>
    </section>
  </main>)
}


function Servicios(){
  
  return(
<main id="servicios">
    <section className="intro">
      <p>En Universo, ofrecemos una variedad de servicios diseñados para apoyar y enriquecer la experiencia educativa de nuestros estudiantes. Nos comprometemos a proporcionar un entorno de aprendizaje inclusivo, personalizado y dinámico que promueve el desarrollo integral de cada niño.</p>   
    </section>

    <div className="preescPrimaria" id='horarioExt'> 
    <h2>Horario Extendido</h2>
    <p>Nuestro servicio de horario extendido ofrece a las familias la flexibilidad que necesitan, permitiendo a los estudiantes permanecer en la escuela más allá del horario regular. Durante este tiempo, los niños son supervisados y pueden jugar libremente en un entorno seguro.</p>      
   </div>

   <div className="preescPrimaria" id="gruposRed">
    <h2>Grupos Reducidos</h2>
      <p>Mantenemos grupos reducidos de 15 alumnos como máximo para asegurar una atención personalizada a cada estudiante. Esto nos permite adaptar la enseñanza a las necesidades individuales y fomentar un ambiente de aprendizaje cercano y colaborativo.</p>
   </div>

   <div className="preescPrimaria">
   <h2>Siete Talleres</h2>
      <p>Ofrecemos diferentes talleres que son incluidos en el horario escolar y que están diseñados para enriquecer la educación de nuestros estudiantes y desarrollar sus habilidades y talentos.</p>
      <Link to="/con/Talleres"><button className='botonOfertaEducativa'>Más información</button></Link>
    </div>

   <div className="preescPrimaria" id="adecuacionCurr">
   <h2>Adecuación Curricular</h2>
   <p>Apoyamos a los estudiantes que enfrentan barreras de aprendizaje o que tienen necesidades educativas especiales trabajando estrechamente con las familias. Desarrollamos planes personalizados que aseguren el bienestar y éxito académico de cada niño, atendiendo a sus necesidades individuales con dedicación y cuidado.</p>      
   </div>

   {/* // TODO: agregar cooperativa y atencion psicopedagogica? */}
  </main>
  )
}

function Contacto(){
  return(
    <main id="mainContacto">
        <div id="informacionContacto">
        <h2>Estamos aquí para ayudarte y responder a cualquier pregunta que puedas tener. No dudes en ponerte en contacto:</h2>
          
          <div >
            <div className="contactoItem">
              <h3>Dirección</h3>
              <p>Atsimu #56, Col. Bosques Camelinas, Morelia, Mich.</p>
              <p>Estamos a un costado del bosque Lázaro Cárdenas.</p>
            </div>

            <div className="contactoItem">
              <h3>Horario</h3>
              <p>Lunes a viernes de 7:30 am a 16:00 pm</p>
            </div>

            <div className="contactoItem">
              <h3>Teléfono</h3>
              <p>44-33-24-62-38</p>
            </div>
            
            <div className="contactoItem">
              <h3>Correo Electrónico</h3>
              <p>primaria.universo.morelia@gmail.com</p>
            </div>
          </div>
          </div>
          <div id="mapa">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7429869056023!2d-101.18047442508134!3d19.680967432702904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0def3982a44f%3A0x1bd1a52802655201!2sUniverso%20Centro%20Educativo!5e0!3m2!1ses-419!2ses!4v1720515097440!5m2!1ses-419!2ses"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación"
            ></iframe>
          </div>
      

        
      </main>
  )
}

function Talleres() {
  return (
    <main id="mainTalleres">
      <section id="introTalleres">
        <h2>
          En Universo, ofrecemos una variedad de talleres en horario escolar (sin costo adicional), diseñados para enriquecer la experiencia educativa de nuestros estudiantes y fomentar el desarrollo de habilidades y talentos diversos.
        </h2>
      </section>

      <section id="contenidoTalleres"> 
        <div className="infoTaller">
          <h2>Música</h2>
          <p>
            El taller de música permite a los estudiantes explorar su creatividad y desarrollar habilidades musicales a través del canto, la instrumentación y la teoría musical.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Danza</h2>
          <p>
            En el taller de danza, los niños aprenden diferentes estilos de baile, mejoran su coordinación y expresan sus emociones a través del movimiento.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Inglés</h2>
          <p>
            El taller de inglés está diseñado para mejorar las habilidades de comunicación en un segundo idioma, utilizando métodos interactivos y lúdicos.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Educación Física</h2>
          <p>
            Este taller promueve un estilo de vida saludable a través de actividades físicas que desarrollan la motricidad, la fuerza y la resistencia.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Ajedrez</h2>
          <p>
            El taller de ajedrez ayuda a los estudiantes a desarrollar el pensamiento estratégico, la concentración y la resolución de problemas de manera divertida.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Artes Plásticas</h2>
          <p>
            En el taller de artes plásticas, los niños pueden explorar diferentes técnicas artísticas, desde la pintura hasta la escultura, fomentando la creatividad y la expresión personal.
          </p>
        </div>

        <div className="infoTaller">
          <h2>Investigación</h2>
          <p>
            Este taller incentiva la curiosidad natural de los niños, enseñándoles a formular preguntas, investigar temas de interés y presentar sus hallazgos.
          </p>
        </div>
      </section>

      <section id="informacionAdicionalTalleres">
        <h2>Más Información</h2>
        <p>
          Para más detalles sobre nuestros talleres y cómo inscribirse, no dudes en contactarnos.
        </p>
        <Link to="/con/Contacto"><button className='botonOfertaEducativa'>Contactar</button></Link>
        <Link to="/con/Oferta"><button className='botonOfertaEducativa'>Volver a Oferta Educativa</button></Link>
      </section>
    </main>
  );
}


export {Filosofia,OfertaEducativa,Servicios,Contacto,Preescolar,Primaria,Talleres};