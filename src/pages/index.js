import React, { useState } from 'react'
import { GlobalStyle } from 'styles';
import { Layout, Nav, About, Contact, Experience, Skills, Hero, Footer, Demo } from 'components'
import {TransitionMotion, spring} from 'react-motion';

const leavingSpringConfig = {stiffness: 60, damping: 15};


const IndexPage = () => {
  const [mouse, setMouse] = useState([])
  const [now, setNow] = useState('t' + 0)
  //const {mouse: [mouseX, mouseY], now} = this.state;

  const styles = 
  //mouseX == null ? [] : 
  [{
    key: now,
    style: {
      opacity: spring(1),
      scale: spring(0),
      //x: spring(mouseX),
      //y: spring(mouseY),
    }
  }];

  const handleMouseMove = ({pageX, pageY}) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: 't' + Date.now(),
      };
    });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMouseMove(e.touches[0]);
  };

  const willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    };
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <title>Toni PM</title>

        <Nav />
        <Demo>
          <Layout>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </Layout>
        </Demo>
      </main>
    </>
  )
}

export default IndexPage
