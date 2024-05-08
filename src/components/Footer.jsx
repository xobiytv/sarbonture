import * as React from 'react';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import logo from '../assisent/logoWhite.png';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './styles.css';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

export default function Footer() {
  return (
    <div className='bg-[#0E1A70] py-16'>
      <div className='  mx-auto px-4 lg:px-10 flex flex-col lg:flex-row justify-between gap-4'>
        {/* Logo and Contact Info Section */}
        <div className='lg:w-5/12 w-full'>
          <div className='flex flex-col lg:flex-row justify-start lg:justify-start gap-3 items-center mb-3'>
            <img src={logo} style={logoStyle} alt='logo of sitemark' className='mb-4' />
          </div>
          <div className='flex flex-col lg:flex-row justify-start lg:justify-start gap-3 items-center mb-3'>
            <div className='p-2 rounded-full white border-[2px] border-white hover:bg-[#0E1A70]'>
              <LocationOnIcon sx={{ color: 'white' }} />
            </div>
            <div className='text-white'>
              <b className='text-[19px]'>Узбекистан Ташкент</b>
              <p className='text-[16px]'>массив Буюк Ипак Йули, 48</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-start lg:justify-start gap-3 items-center'>
            <div className='p-2 rounded-full white border-[2px] border-white hover-[#0E1A70]'>
              <PhoneEnabledIcon sx={{ color: 'white' }} />
            </div>
            <div className='text-white'>
              <b className='text-[19px]'>+99890041 77 88</b>
              <p className='text-[16px]'>24/7 Помощь Поддержка</p>
            </div>
          </div>
        </div>

        {/* Navigation Links and Social Icons Section */}
        <div className='lg:w-3/12 w-full text-white flex flex-col lg:flex-row justify-start lg:justify-start gap-3 items-center'>

          <div>
            <ul>

              <li>
                <b className='text-2xl'>Product</b>
              </li>
              <li >
                <Link to={'/'}>
                  <p className='text-white text-lg'>
                    ГЛАВНАЯ
                  </p>

                </Link>
              </li>
              <li>
                <Link className='text-white' to={'/about'}>

                  <p className='text-white text-lg'>
                    О КОМПАНИИ
                  </p>
                </Link>
              </li>
              <li>
                <Link className='text-white' to={'/tour'}>

                  <p className='text-white text-lg'>
                    ЗАРУБЕЖНЫЕ ТУРЫ
                  </p>
                </Link>
              </li>



            </ul>
            <Stack
              direction='row'
              justifyContent='flex-start'
              spacing={1}
              sx={{ color: 'text.secondary' }}
              className='mt-4 lg:mt-0'
            >
              <IconButton color='inherit' href=' ' aria-label='Telegram' sx={{ color: 'white' }}>
                <TelegramIcon />
              </IconButton>
              <IconButton color='inherit' href=' ' aria-label='Instagram' sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color='inherit' href=' ' aria-label='YouTube' sx={{ color: 'white' }}>
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </div>

        </div>

        {/* Google Maps Section */}
         <div className='lg:w-4/12 w-full mt-8 lg:mt-0'>
                    <iframe
                        className='w-full h-52 lg:h-auto'
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17260.96671106854!2d67.8335716257686!3d40.112500455977305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b295d4b45f52e3%3A0x87011a97fa69f7f9!2sKing%20burger!5e0!3m2!1sru!2s!4v1714936376128!5m2!1sru!2s'
                        height='260'
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
      </div>

      {/* Copyright Section */}

    </div>
  );
}
