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
        <div className='  '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                {bgHeader.map((item) => (
                    <SwiperSlide>
                        <div key={item.id} className={`w-full lg:h-[100vh] md:h-[100vh] h-[40vh] flex items-center ${item.bg} `} >
                            <div className='flex flex-col mt-10 items-start justify-between text-white pl-12' >
                                <p className='lg:text-[23px] md:text-[23px] text-[17px] font-light lg:mb-6 md:mb-6 mb-1'>{item.name} </p>
                                <b className='lg:text-[63px] md:text-[42px] sm:text-[36px] text-2xl'>{item.destriction} </b>
                                <div className='flex items-center'>
                                    <button  className='rounded bg-[#0E1A70] px-6 py-2 lg:text-[23px] md:text-[23px] text-[15px]  active:bg-[#0E1A70] active:px-5 lg:active:py-1 lg:active:mt-14  mt-6'>
                                        <a href="tel:+998900417788">Контакт с Нами</a>
                                    </button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
}
