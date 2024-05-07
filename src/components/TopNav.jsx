import * as React from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import './styles.css'
import { AppBar } from '@mui/material';


function AppAppBar() {

    return (

        <AppBar
            position="absolute"
            sx={{
                boxShadow: 0,
                bgcolor: 'white',
                backgroundImage: 'none',
                
            }}
        >
            <div className='flex h-[125px] dNone justify-between items-start translate-y-5 px-6'>
                <a href='https://maps.app.goo.gl/BHNMSs2NQ1XdmpHs8' className='flex justify-start ml-3 gap-3 items-center w-4/12'>
                    <div className='p-3 rounded-full white border-[2px] border-[#0E1A70] hover:bg-[#0E1A70] '>
                        <LocationOnIcon className='white' sx={{ color: '#0E1A70' }} />
                    </div>
                    <div className='text-[#0E1A70]'>
                        <b className='text-[21px] '>Узбекистан Ташкент</b>
                        <p className='text-[17px] '>массив Буюк Ипак Йули, 48</p>
                    </div>
                </a>


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


                <a href='tel:+998900417788' className='flex justify-end mr-3 gap-3 items-center w-4/12'>
                    <div className='p-3 rounded-full white border-[2px] border-[#0E1A70] hover:bg-[#0E1A70] '>
                        <PhoneEnabledIcon className='white' sx={{ color: '#0E1A70' }} />
                    </div>
                    <div className='text-[#0E1A70]'>
                        <b className='text-[21px] '>+99890041 77 88</b>
                        <p className='text-[17px] '>24/7 Помощь Поддержка</p>
                    </div>
                </a>
            </div>
        </AppBar>



    );
}

export default AppAppBar;