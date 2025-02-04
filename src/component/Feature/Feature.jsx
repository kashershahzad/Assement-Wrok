import React from 'react';

const Feature = () => {
    return (
        <div className=''>
            <hr className="border-t-1 border-gray-300" />
            <div className='bg-[url("/images/Background.png")] bg-cover bg-center lg:p-20 p-5'>
                <div className='flex lg:flex-row flex-col lg:gap-20 gap-3  items-center justify-center bg-white p-10 rounded-lg shadow-lg'>
                    <div className='max-w-lg'>
                        <p className='text-darkBlue lg:text-xl'>
                            <span className='font-bold'>Connect your brokerage accounts</span> <br /> and get access to trading ideas,<br /> aggregated stats and discussions in <br /> your tech investing community right <br /> away.
                        </p>
                    </div>
                    <div>
                        <img src="/images/Groups Cards.png" alt="Group Cards" height={500} width={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
