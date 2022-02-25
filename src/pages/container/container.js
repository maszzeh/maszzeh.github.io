import * as React from 'react';
import './container.css';
import {Link, Routes, Route} from 'react-router-dom';
// import Scroll from 'react-scroll';

import Header from '../header/header';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <AppBar sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: "static",
          margin: 0,
          backgroundColor: "rgb(21, 15, 54)",
          color: "white",
          height: "150px",
      }}>
        <div className="nav-logo">
            <h1>GHOZY</h1>
        </div>
        <div className="nav-menu">
          <Link className='link-item' activeClass="active" to="/#home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          <Link className='link-item' activeClass="active" to="/#about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
          <Link className='link-item' activeClass="active" to="/#profil" spy={true} smooth={true} offset={50} duration={500}>Profil</Link>
          <Link className='link-item' activeClass="active" to="/#contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
        </div>
        <Toolbar id="back-to-top-anchor" />
      </AppBar>

      <div className="main-content">
          <Header />  
      </div>
     

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}