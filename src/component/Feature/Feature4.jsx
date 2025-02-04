import React from 'react'

const Feature4 = () => {
  return (
    <div>
    <hr className="border-t-1 border-gray-300" />
    <div className='bg-[#9F73C2] bg-cover bg-center lg:p-20 p-5'
                style={{
                    backgroundImage: "url('/images/purple.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "start"
                }}
            >
      <div className='relative flex lg:flex-row flex-col lg:gap-40 gap-3 items-center justify-center bg-white p-10 rounded-lg shadow-lg lg:h-[400px]'>
      <div className="relative">
          <img
            src="/images/card4.png"
            alt="Group Cards"
            height={500}
            width={500}
            className="lg:-m-10 lg:scale-110 scale-105 drop-shadow-lg transition-transform duration-500 transform hover:scale-110"
          />
        </div>
        <div className='max-w-lg'>
          <p className='text-darkBlue lg:text-xl'>
            <span className='font-bold'>Receive personalized investor </span> <br/>reports and understand how your<br /> trading activities contribute to<br /> your overall wealth.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature4