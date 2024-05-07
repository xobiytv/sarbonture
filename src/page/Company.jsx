import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import getLPTheme from './getLPTheme';
import HeadAbout from '../components/HeadAbout';
import FooterBot from '../components/FooterBot';
import About from '../components/About';



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


                <HeadAbout />
                <About />
                <Footer />
                <FooterBot />

            </div>
            {/* <CssBaseline /> */}


        </ThemeProvider>
    );
}