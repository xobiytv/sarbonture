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
            <div className='flex  h-[125px] justify-between items-start translate-y-5 px-6'>
                <a href='https://maps.app.goo.gl/BHNMSs2NQ1XdmpHs8' className='flex justify-evenly items-center w-3/12'>
                    <div className='p-3 rounded-full white border-[2px] border-indigo-500 hover:bg-indigo-500 '>
                        <LocationOnIcon className='white' sx={{ color: 'rgb(99 102 241 )' }} />
                    </div>
                    <div className='text-indigo-500'>
                        <b className='text-[21px] '>Узбекистан Ташкент</b>
                        <p className='text-[17px] '>массив Буюк Ипак Йули, 48</p>
                    </div>
                </a>


                <ul className='flex gap-4'>
                    <li>
                        <a href="">
                            <div className='p-3 rounded-full white border-[2px] cursor-pointer border-indigo-500 hover:bg-indigo-500 '>
                                <TelegramIcon className='white' sx={{ color: 'rgb(99 102 241 )' }} />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className='p-3 rounded-full white border-[2px] border-indigo-500 hover:bg-indigo-500 '>
                                <InstagramIcon className='white' sx={{ color: 'rgb(99 102 241 )' }} />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className='p-3 rounded-full white border-[2px] border-indigo-500 hover:bg-indigo-500 '>
                                <YouTubeIcon className='white' sx={{ color: 'rgb(99 102 241 )' }} />
                            </div>
                        </a>
                    </li>
                </ul>


                <a href='tel:+998900417788' className='flex justify-evenly items-center w-3/12'>
                    <div className='p-3 rounded-full white border-[2px] border-indigo-500 hover:bg-indigo-500 '>
                        <PhoneEnabledIcon className='white' sx={{ color: 'rgb(99 102 241 )' }} />
                    </div>
                    <div className='text-indigo-500'>
                        <b className='text-[21px] '>+99890041 77 88</b>
                        <p className='text-[17px] '>24/7 Помощь Поддержка</p>
                    </div>
                </a>
            </div>
        </AppBar>



    );
}

export default AppAppBar;