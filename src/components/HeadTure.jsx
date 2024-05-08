import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Chips from '../components/Chips'

import tureData from '../api/ture.json'; // ture.json fayl yuklanishi

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    border: '2px solid black',
    borderRadius: '5px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '37ch',
            '&:focus': {
                width: '52ch',
            },
        },
    },
}));

export default function HeadTure({ label }) {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState(''); // Qidirish so'zini saqlash uchun holat

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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', // Modal genişliği
        maxWidth: 600, // Maksimum genişlik
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const filteredTureData = tureData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=" bgAbout h-auto">
            <div className='flex  lg:h-[33vh] h-[15vh] pt-16 lg:items-end items-start px-9 '>
                <div className='flex justify-between items-center w-full'>
                    <p className="px-3 py-2 text-blue-700 font-medium text-xl rounded">-Tour</p>
                    <Chips label={'Tour'} />
                </div>

            </div>
            <div className="flex   translate-y-11 justify-end gap-3 items-center text-center w-full flex-col text-black">


                <div className='px-3 lg:px-0'>
                    <Search style={{ background: 'white' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search', type: 'search' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Search>
                </div>


                <p className='text-white text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {filteredTureData.length === 0 && (
                <div className="text-red-600 text-center mt-16">
                    Tour hozirda mavjud emas.
                </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-16 pb-10 pb-5">
                {filteredTureData.map((item) => (
                    <div
                        key={item.id}
                        className="rounded w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 overflow-hidden cursor-pointer"
                        onClick={() => handleOpen(item)}
                    >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                ))}
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
                                    <p className='text-lg'>{selectedItem.description} </p>
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
