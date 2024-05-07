import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import getLPTheme from './getLPTheme';
import Ture from '../components/Ture';
import Header from '../components/Header';
import VideoObzor from '../components/VideoObzor';
import FooterBot from '../components/FooterBot';



export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });



  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <div className='bg-white'>
        <TopNav />
        <AppAppBar mode={mode} />
        {/* <Hero /> */}
        <Header />
        <Box sx={{ bgcolor: 'background.default' }}>
          {/* <LogoCollection /> */}
          <Ture /> 
          {/* <Divider /> */}
          <Highlights />
          <VideoObzor />
          {/* <Features /> */}
         
          {/* <Testimonials /> */}
          {/* <Divider /> */}
         
          {/* <Divider /> */}
          {/* <Pricing /> */}
          {/* <Divider /> */}
          {/* <FAQ /> */}
          {/* <Divider /> */}
          <Footer />
          <FooterBot />
        </Box>
      </div>
      {/* <CssBaseline /> */}


    </ThemeProvider>
  );
}