import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ture } from "../api/api";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '@mui/material';

export default function Ture() {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedItem(null);
        setOpen(false);
    };

    const modalStyle = {
        position: 'absolute',
        border: 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', // Modal genişliği
        maxWidth: 700, // Maksimum genişlik
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='lg:h-[100vh] md:h-[80vh] h-full '>
            <div className="text-center">
                <h1 className="lg:text-[45px] md:text-[32px] text-[28px] my-10 font-bold">ЗАРУБЕЖНЫЕ ТУРЫ</h1>
            </div>
            <div className='lg:block md:block  hidden'>
                <Container className="flex flex-wrap justify-center gap-4 m-10">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: ture,
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: false,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper bg-none"
                    >


                        {ture.map((item) => (
                            <SwiperSlide key='index' className=''>

                                <div key={item.id} className="rounded w-full overflow-hidden cursor-pointer" onClick={() => handleOpen(item)}>
                                    <img src={item.image} alt={item.name} className="w-full hover:w-[105%] h-full object-cover" />
                                </div>

                            </SwiperSlide>
                        ))}







                    </Swiper>


                </Container>
            </div>
            <div className='lg:hidden md:hidden block'>
                <Container className="flex flex-wrap justify-center gap-4 m-10">

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: ture,
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: false,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper bg-none"
                    >


                        {ture.map((item) => (
                            <SwiperSlide key='index' className=''>

                                <div key={item.id} className="rounded w-full overflow-hidden cursor-pointer" onClick={() => handleOpen(item)}>
                                    <img src={item.image} alt={item.name} className="w-full hover:w-[105%] h-full object-cover" />
                                </div>

                            </SwiperSlide>
                        ))}







                    </Swiper>


                </Container>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    {selectedItem && (
                        <div className='lg:flex md:flex gap-4'>
                            <img src={selectedItem.image} alt={selectedItem.name} className="w-1/2 h-full object-contain rounded" />

                            <div className='flex justify-between lg:items-start md:items-start   items-center flex-col'>
                                <div>
                                    <b className='text-xl'>{selectedItem.name}</b>
                                    <p className='text-lg'>{selectedItem.discration} </p>
                                </div>

                                <button className='rounded px-3 py-2 bg-[#0E1A70] text-white active:bg-[#939ef3c2]' variant="contained"  >
                                    Bron qilish
                                </button>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
