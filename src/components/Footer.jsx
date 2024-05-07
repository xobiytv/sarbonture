import * as React from 'react';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
 
import './styles.css'

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div
      className=''

    >

      <div className='flex justify-between px-10'>
        <div className='lg:w-5/12'>
          <Box sx={{ ml: '-15px' }}>
            <img
              src={
                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
              }
              style={logoStyle}
              alt="logo of sitemark"
            />
            <p className='w-8/12 pl-4 pb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium magni ea fugiat?
            </p>
          </Box>
          <div className=''>
            <div className='flex justify-start gap-3 items-center mb-3 '>
              <div className='p-2 rounded-full white border-[2px] border-black hover:bg-black '>
                <LocationOnIcon className='white' sx={{ color: 'black )' }} />
              </div>
              <div className='text-black'>
                <b className='text-[19px] '>Узбекистан Ташкент</b>
                <p className='text-[16px] '>массив Буюк Ипак Йули, 48</p>
              </div>
            </div>
            <div className='flex justify-start gap-3 items-center  '>
              <div className='p-2 rounded-full white border-[2px] border-black hover:bg-black '>
                <PhoneEnabledIcon className='white' sx={{ color: 'black' }} />
              </div>
              <div className='text-black'>
                <b className='text-[19px] '>+99890041 77 88</b>
                <p className='text-[16px] '>24/7 Помощь Поддержка</p>
              </div>
            </div>
          </div>

        </div>
        <div className='lg:w-3/12'>
          <ul>

            <li>
              <b>Product</b>
            </li>
            <li>
              <Link to=''>
                ГЛАВНАЯ
              </Link>
            </li>
            <li>
              <Link to=''>
                О КОМПАНИИ
              </Link>
            </li>
            <li>
              <Link to=''>
                ЗАРУБЕЖНЫЕ ТУРЫ
              </Link>
            </li>
            <li>
              <Link to=''>
                ТУРЫ ПО УЗБЕКИСТАНУ
              </Link>
            </li>

          </ul>
          <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href=" "
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href=" "
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href=" "
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <YouTubeIcon />
          </IconButton>
        </Stack>
        </div>

        <div className='lg:w-4/12'>
          <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17260.96671106854!2d67.8335716257686!3d40.112500455977305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b295d4b45f52e3%3A0x87011a97fa69f7f9!2sKing%20burger!5e0!3m2!1sru!2s!4v1714936376128!5m2!1sru!2s" height="260" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


    
    </div >
  );
}