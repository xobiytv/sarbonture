import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { bgHeader } from '../api/api';

export default function App() {
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                {bgHeader.map((item) => (
                    <SwiperSlide>
                        <div key={item.id} className={`w-full h-[100vh] flex items-center ${item.bg} `} >
                            <div className='flex flex-col mt-10 items-start justify-between text-white pl-12' >
                                <p className='text-[23px] font-light'>{item.name} </p>
                                <b className='text-[63px]'>{item.destriction} </b>
                                <div className='flex items-center'>
                                    <button className='rounded bg-[#0E1A70] px-6 py-2 mt-12 active:bg-[#0E1A70] active:px-5 active:py-1 active:mt-14'>КОНТАКТЫ С НАМИ</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
}
