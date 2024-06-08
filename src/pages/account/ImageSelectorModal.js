import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, IconButton } from '@mui/material';
import React, { useState } from 'react';

const ImageSelectorModal = ({ setOpend, setselectedImages, open, onClose, images }) => {

  const toggleImageSelection = (image) => {
    setselectedImages([image]);
    setOpend(false)
  };

  return (
    <div>

      <Dialog
        sx={{
          maxWidth: "400px !important",
          minWidth: "400px !important",
          margin: "auto",
          minHeight: "70%",
          maxHeight: "80%",
        }}
        open={open}
        className="!h-fit !w-fit !absolute !mx-5 !top-20 !bg-white !border border-black !p-2 !rounded">
        <IconButton className=' !flex !justify-end'>
          <Close onClick={onClose} />
        </IconButton>

        <div className="modal-content">
          <h2 className='py-2 text-center font-bold'>Select Images</h2>
          <div className="image-container !grid grid-cols-3 !justify-center gap-2 m-4">
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  onClick={() => toggleImageSelection(image)}
                  src={image} alt={`Image ${index}`} className='w-28 h-28' />

              </div>
            ))}
          </div>

        </div>

      </Dialog>
    </div>
  );
};

export default ImageSelectorModal
