import React from 'react'
import Fade from 'react-reveal/Fade'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;


const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    position: relative;
    border-radius: var(--border-radius);
    background-color: var(--primary);
    width: 100%;

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      border: 2px solid var(--primary);
      top: 20px;
      left: 20px;
      z-index: -1;
    }

    &:hover,
    &:focus {
      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
  }
`;

const About = () => {
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <StyledSection>
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
              <p>Algún día me gustaria llegar a ser todo un maestro de JavaScript, pero como cambia cada año es dificil seguir el ritmo 😂</p>
              <p>
                Siempre preparado para nuevos retos.
              </p>
            </div>
            <StyledPic>
              <div className='wrapper'>
                <StaticImage
                  className="img"
                  src="../../images/me1.jpeg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Toni"
                />
              </div>
            </StyledPic>
          </div>
        </section>
      </StyledSection>
    </Fade>
  )
}

export default About
