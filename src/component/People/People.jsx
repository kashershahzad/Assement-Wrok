import React from 'react'

const People = () => {
    return (
        <div className='bg-lightBlue lg:px-20 px-5 relative lg:py-5 pb-3'>
            <div className='flex items-center justify-center gap-10 flex-col lg:flex-row bg-[url("/images/Background.png")]'>
                <div>
                    <img src="\images\QR Code.png" alt="" height={300} width={300} />
                </div>
                <div className='bg-white flex lg:relative rounded-xl'>
                    <div className=' lg:absolute lg:left-[-80px] mt-3'>
                        <img src="images\Illistration.png" alt="" height={180} width={200}/>
                    </div>
                    <div className='lg:p-20 p-5 text-darkBlue lg:pl-40 lg:text-lg text-sm'>
                        <span className='font-bold'>Sign up today</span> and manage your <br /> portfolio like a pro with personalized<br /> assistant and access to a trusted tech<br /> community of 1,200 members who<br /> connected $150M+ of total assets.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People