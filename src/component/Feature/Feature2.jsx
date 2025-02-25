import React from 'react';

const Feature2 = () => {
    return (
        <div className=''>
            <hr className="border-t-1 border-gray-300" />
            <div className='bg-[#31CE5D] bg-cover bg-center lg:p-20 p-5'
                style={{
                    backgroundImage: "url('/images/green.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "start"
                }}
            >
                <div className='flex lg:flex-row flex-col lg:gap-20 gap-3  items-center justify-center bg-white p-10 rounded-lg shadow-lg'>
                    <div>
                        <img src="/images/Groups Cards.png" alt="Group Cards" height={500} width={500} className="transition-transform duration-500 transform hover:scale-110" />
                    </div>
                    <div className='max-w-lg'>
                        <p className='text-darkBlue lg:text-xl'>
                            <span className='font-bold'>Track your net worth automatically</span> <br />  and spend less time managing your <br /> personal finances. No need to update <br />spreadsheets manually anymore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature2;
