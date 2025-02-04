import React from 'react';

const Info = () => {
  return (
    <div className='relative bg-[url("/images/Rectangle.png")] lg:mt-20 bg-cover bg-center lg:h-[150px] flex justify-center items-center h-[80px] mt-10'>
      {/* Image wrapper */}
      <div className='absolute lg:top-[-80px] top-[-20px]  lg:px-20 px-5'>
        <img src="/images/Faces.png" alt="Faces" className='w-auto h-auto' />
      </div>
    </div>
  );
}

export default Info;
