import * as React from 'react';
import PropTypes from 'prop-types';
import logo from '../assisent/logoWhite.png';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { Link } from 'react-router-dom';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="absolute"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: { xs: '0', md: '95px ', lg: '95px ' },
        }}
      >
        <div className='flex justify-center '>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              width: '95%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: '#0E1A70',
              // backdropFilter: 'blur(24px)',
              height: '70px',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                p: 2,
                paddingTop: '3px',
                paddingBottom: '3px',
              }}
            >
              <Link to={'/'}>
                <img
                  className='w-[70%] '
                  src={logo}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Link>

              {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                
              
              </Box> */}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <MenuItem
                onClick={() => scrollToSection('features')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Link to={'/'} >
                  <Typography sx={{ fontSize: '17px', color: 'white', }} variant="body2" color="text.primary">
                    ГЛАВНАЯ
                  </Typography>
                </Link>

              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('testimonials')}
                sx={{ py: '6px', px: '12px' }}
              >

                <Link to={'/about'} >
                  <Typography sx={{ fontSize: '17px', color: 'white', }} variant="body2" color="text.primary">
                    О КОМПАНИИ
                  </Typography>
                </Link>

              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('highlights')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Link to={'/tour'} >
                  <Typography sx={{ fontSize: '17px', color: 'white', }} variant="body2" color="text.primary">
                    ЗАРУБЕЖНЫЕ ТУРЫ
                  </Typography>
                </Link>

              </MenuItem>

            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon  sx={{color: 'white'}} />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Link to={'/'} >
                    <MenuItem onClick={() => scrollToSection('features')}>
                      Features
                    </MenuItem>
                  </Link>
                  <Link to={'/about'} >
                    <MenuItem onClick={() => scrollToSection('testimonials')}>
                      Testimonials
                    </MenuItem>
                  </Link>
                  <Link to={'/tour'} >
                    <MenuItem onClick={() => scrollToSection('highlights')}>
                      Highlights
                    </MenuItem>
                  </Link>





                  <Button variant="outlined" startIcon={<LocalPhoneIcon />}>+99890041 77 88 </Button>
                  <ul className='flex gap-4 items-center'>
                    <li>
                      <a href="">
                        <div className='p-2 rounded-full white border-[2px] cursor-pointer border-[#0E1A70] hover:bg-[#0E1A70] '>
                          <TelegramIcon className='white' sx={{ color: '#0E1A70' }} />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className='p-2 rounded-full white border-[2px] border-[#0E1A70] hover:bg-[#0E1A70] '>
                          <InstagramIcon className='white' sx={{ color: '#0E1A70' }} />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className='p-2 rounded-full white border-[2px] border-[#0E1A70] hover:bg-[#0E1A70] '>
                          <YouTubeIcon className='white' sx={{ color: '#0E1A70' }} />
                        </div>
                      </a>
                    </li>
                  </ul>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </div>


      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;