import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageSelectorModal = ({selectedImages,setselectedImages, isOpen, onClose, images }) => {

  const toggleImageSelection = (image) => {
    if (selectedImages.includes(image)) {
      setselectedImages(selectedImages.filter((img) => img !== image));
    } else {
      setselectedImages([...selectedImages, image]);
    }
  };

  return (
   <div>
     <Modal isOpen={isOpen} onRequestClose={onClose} 
    className="!h-fit !w-fit !absolute !mx-5 !top-20 !bg-white !border border-black !p-2 !rounded">
      <div className="modal-content">
        <h2 className='py-2 text-center font-bold'>Select Images</h2>
        <div className="image-container !grid grid-cols-3 !justify-center gap-2 m-4">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index}`}  className='w-28 h-28'/>
              <input
                type="checkbox"
                checked={selectedImages.includes(image)}
                onChange={() => toggleImageSelection(image)}
              />
            </div>
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
   
   </div>
  );
};

export default ImageSelectorModal
