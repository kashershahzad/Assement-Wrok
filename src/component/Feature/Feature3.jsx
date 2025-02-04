import React from 'react';

const Feature3 = () => {
  return (
    <div>
      <hr className="border-t-1 border-gray-300" />
      <div className='bg-[#FBBC12] bg-cover bg-center lg:p-20 p-5'
                style={{
                    backgroundImage: "url('/images/orange.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "start"
                }}
            >
        <div className='relative flex lg:flex-row flex-col lg:gap-40 gap-3 items-center justify-center bg-white p-10 rounded-lg shadow-lg lg:h-[400px]'>
          <div className='max-w-lg'>
            <p className='text-darkBlue lg:text-xl'>
              <span className='font-bold'>Automate monitoring</span> of your trading <br /> accounts 24/7. Control your risks and <br /> manage your portfolio like a PRO.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/Card3.png"
              alt="Group Cards"
              height={400}
              width={400}
              className="lg:-m-10 lg:scale-110 scale-105 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
