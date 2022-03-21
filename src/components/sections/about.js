import React from 'react'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='about'>
        <h2>About Me</h2>

        <div className='inner'>
          <div>
            <p>Hola mi nombre es Toni! Soy un desarrollador Full-stack apasionado por aprender cosas nuevas.
              Me encanta aprender nuevas tecnologías y estar al día de las novedades del mundo del desarrollo.</p>
            <p>
              Una de las cosas que más me gustan de la programación es que me permite encontrar soluciones para todo, por eso soy un gran fan del scripting. Si tengo que hacer cualquier cosa, seguro que se puede automatizar con un script.
            </p>
            <p>
              En constante aprendizaje y con la música siempre puesta, a día de hoy estoy especializandome en ciberseguridad, aunque las horas se me pasan mucho mas rapido en el Frontend.
            </p>
            <p>Algún día me gustaria llegar a ser todo un maestro de JavaScript, pero como cambia cada año es dificil seguir el ritmo XD.</p>
            <p>
              Siempre preparado para nuevos retos.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default About
