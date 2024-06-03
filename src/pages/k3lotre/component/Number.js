import React, { useState } from 'react';

const NumberGrid = ({ title, numbers, onNumberClick, selectedNumbers }) => {
  return (
    <div>
      <p className="!text-gray-500">{title}</p>
      <div className="flex justify-between  my-4">
        {numbers.map((number) => (
          <p
            key={number}
            className={`bg-[#fb9494] p-2 px-4 text-white rounded-md
             ${selectedNumbers.includes(number) ? '!bg-[#B659FE]' : ''}`}
            onClick={() => onNumberClick(number)}
          >
            {number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NumberGrid;
