import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHero = styled.div`

  h1 {
    margin: 0px 0px 0px 0px;
    color: var(--primary);
    font-weight: normal;
    font-size: clamp(25px, 4.5vw, 45px);
  }

  h2, h3 {
    font-size: clamp(30px, 5vw, 50px);
  }
`

const Hero = () => {

  const one = <h1>Hi, I'm Toni</h1>;
  const two = <h2>Software & Web Developer</h2>;
  const three = <h3>Cybersecurity Specialist</h3>;
  const four = (
    <>
      <p>
        Actualmente analista programador y jefe de proyecto, especializandome en ciberseguridad para entender los peligros informáticos que dejamos tras nuestro trabajo, que evolucionan al mismo tiempo que el desarrollo.
      </p>
    </>
  );

  const items = [one, two, three, four];
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='hero'>
        <StyledHero>
          {items.map((item, i) => (
            <div>{item}</div>
          ))}
        </StyledHero>
      </section>
    </Fade>
  )
}

export default Hero
