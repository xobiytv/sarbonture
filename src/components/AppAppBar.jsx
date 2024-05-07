import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';

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
          mt: 12  ,
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
              bgcolor: '#fff',
              // backdropFilter: 'blur(24px)',
              maxHeight: 40,
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
                px: 0,
              }}
            >
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
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
                <Typography sx={{ fontSize: '17px', color: 'black', }} variant="body2" color="text.primary">
                  ГЛАВНАЯ
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('testimonials')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography sx={{ fontSize: '17px', color: 'black', }} variant="body2" color="text.primary">
                  О КОМПАНИИ
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('highlights')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography sx={{ fontSize: '17px', color: 'black', }} variant="body2" color="text.primary">
                  ЗАРУБЕЖНЫЕ ТУРЫ
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('highlights')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography sx={{ fontSize: '17px', color: 'black', }} variant="body2" color="text.primary">
                  ТУРЫ ПО УЗБЕКИСТАНУ
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
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
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    Features
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    Highlights
                  </MenuItem>


                  <Button variant="outlined" startIcon={<LocalPhoneIcon />}>+99890041 77 88 </Button>
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