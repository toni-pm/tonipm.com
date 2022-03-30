import React, { useState, useEffect } from 'react'
import { Trans, Link, useI18next } from 'gatsby-plugin-react-i18next'
import { navItems, social } from 'config'
import { KEY_CODES } from '../utils'
import { Logo } from 'components'
import { Icon } from 'components/icons'
import styled from 'styled-components'

const Navigation = styled.nav`
  width: 11rem;
  background-color: var(--nav-bg-color);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  padding-top: 25px;
  z-index: 1;
  -webkit-box-shadow: 6px 4px 14px 5px var(--shadow); 
  box-shadow: 6px 4px 14px 5px var(--shadow);

  .languages {
    list-style-type: none;
    padding: 0;
    text-align: center;
    display: flex;
    font-size: var(--fz-md);

    li {
      margin: 0 8px;

      a {
        color: var(--nav-color);

        :hover {
          color: var(--nav-color-hover);
          ::after {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    background-color: var(--nav-bg-color-mobile);
    position: ${props => (props.open ? 'fixed' : 'sticky')};
    justify-content: center;
    align-items: flex-start;
    height: 6vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding: 10px;

    .languages {
      display: none;
    }
  }
`

const Navbox = styled.div`
  background-color: var(--nav-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    transition: all 0.3s ease-in;
    top: 0;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`

const Toggle = styled.div`
  position: absolute;
  right: 0;
  height: 30px;
  width: 30px;
  display: none;
  cursor: pointer;
  margin: 10px 20vw;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Hamburger = styled.div`
  background-color: var(--primary);
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--primary);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`

const NavItem = styled(Link)`
  color: var(--nav-color) !important;
  display: inline-block;
  padding: 15px 0 !important;

  &:hover {
    color: var(--primary) !important;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .logo {    
    display: ${props => (props.open ? 'flex' : 'none')};
  }

  .languages {    
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`

const StyledSocial = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex - start;
  margin-top: 30px;
  padding: 0;
  list-style: none;

  @media(max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light - slate);
  }

  li {
    list-style: none;

    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &: hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 768px) {
    justify-content: flex-start;
    padding-left: ${props => (props.open ? '0' : '50px')};
  }
`

const Nav = ({ isHome }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const NavbarLinks = ({ open }) => {
    return (
      <StyledLinks open={open}>
        <HeaderLogo open={open} style={{ 'margin-bottom': '20px' }}>
          <Link to='/' className='default'>
            <Logo />
          </Link>
          <LanguageLinks />
        </HeaderLogo>
        {
          navItems &&
          navItems.map(({ url, name }, i) => (
            <NavItem className='default' key={i} to={url} onClick={() => setNavbarOpen(false)}><Trans>{name}</Trans></NavItem>
          ))
        }
      </StyledLinks>
    )
  }

  const LanguageLinks = () => {
    const { languages, originalPath } = useI18next()
    return (
      <ul className='languages'>
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} className='default' onClick={() => setNavbarOpen(false)} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const SocialLinks = ({ open }) => {
    return (
      <StyledSocial open={open}>
        {social &&
          social.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} target='_blank' rel='noreferrer'>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocial>
    )
  }

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
        setNavbarOpen(false)
        break
      default:
    }
  }

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Navigation open>
      {navbarOpen
        ? (
          <Navbox>
            <div />
            <NavbarLinks open />
            <SocialLinks open />
          </Navbox>
        )
        : (
          <>
            <HeaderLogo>
              <Link to='/'>
                <Logo />
              </Link>
              <LanguageLinks />
            </HeaderLogo>
            <Navbox open>
              <NavbarLinks open={navbarOpen} />
            </Navbox>
            <SocialLinks open={navbarOpen} />
          </>
        )}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen
          ? <Hamburger open />
          : <Hamburger />}
      </Toggle>
    </Navigation>
  )
}

export default Nav
