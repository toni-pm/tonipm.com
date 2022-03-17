import React, { useState, useEffect } from 'react';
import { navDelay, loaderDelay } from '../../utils';
import Fade from 'react-reveal/Fade'

const Hero = () => {

  const one = <h1>Hi, I'm Toni</h1>;
  const two = <h2 className="big-heading">Software & Web Developer</h2>;
  const three = <h3 className="big-heading">System Administrator</h3>;
  const four = (
    <>
      <p>
        Nullam tincidunt posuere libero. In bibendum est eu lacus elementum feugiat. Phasellus lacus tellus, pretium ac tellus vitae, sollicitudin tincidunt lectus. Donec iaculis molestie tellus et semper. Cras et nibh ultricies, vehicula mauris non, interdum enim. Vivamus gravida diam in tellus mattis imperdiet. Nunc vel ipsum augue. In a ornare eros. Nullam malesuada lacinia erat nec scelerisque. Praesent non urna vel ex dignissim dapibus. Vestibulum pharetra porta ante et bibendum. In nec mollis leo.
      </p>
    </>
  );

  const items = [one, two, three, four];
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='hero'>
        {items.map((item, i) => (
          <div>{item}</div>
        ))}
      </section>
    </Fade>
  )
}

export default Hero
