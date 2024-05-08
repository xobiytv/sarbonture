import * as React from 'react';

import { Obzor } from "../api/api";


export default function Ture() {

    return (
        <>
            <div className="text-center">
                <h1 className="lg:text-[45px] md:text-[32px] text-[28px] mb-10 mt-14 font-bold">Смотрите наши видео-обзоры</h1>
            </div>
            <div className='px-20 mb-8'>
                <div className="flex flex-wrap justify-around gap-4 ">
                    {Obzor.map((item) => (
                        <div key={item.id} className="rounded w-full md:w-1/3 lg:w-1/3 xl:w-1/4 overflow-hidden cursor-pointer"  >
                            {/* <img src={item.image} alt={item.name} /> */}
                            <iframe width='100%' height="190" src={item.video} title="Как проходят наши туры" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    ))}
                </div>
            </div>



        </>
    );
}
