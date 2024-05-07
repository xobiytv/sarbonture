import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ture } from "../api/api";
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', // Modal genişliği
        maxWidth: 600, // Maksimum genişlik
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
           
            <div className="flex flex-wrap justify-center gap-4 mt-16 mb-10">
                {ture.map((item) => (
                    <div key={item.id} className="rounded w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 overflow-hidden cursor-pointer" onClick={() => handleOpen(item)}>
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
                        <div className='flex gap-4'>
                            <img src={selectedItem.image} alt={selectedItem.name} className="w-1/2 h-full object-contain" />

                            <div>
                                <b>{selectedItem.name}</b>
                                <p>{selectedItem.discration} </p>
                                <Button variant="contained" endIcon={<AddShoppingCartIcon  />}>
                                    Bron qilish
                                </Button>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
        </>
    );
}
