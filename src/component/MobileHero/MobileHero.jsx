import React from 'react'

const MobileHero = () => {
    return (
        <div className='lg:mt-10 p-3 text-center'>
            <div className="mt-10 flex justify-center">
                <img src="/images/mobile.png" alt="" height={150} width={150}/>
            </div>
            <p className='lg:text-[40px] text-4xl my-10 font-bold text-[#00ABE1]'>
                FAANG 
                INVESTING <br />
                COMMUNITY <br />
            </p>
            <p className='text-[#127398] text-[20px] font-bold'>We help people working in BigTech <br /> make better financial decisions<br /> with the data and insights<br /> provided by AI</p>
            <div className='flex flex-col gap-5 items-center mt-5 mb-5'>
                <div>
                    <img src="/images/add.png" alt="" />
                </div>
                <div>
                    <img src="/images/add2.png" alt="" />
                </div>
            </div>
            <p className='text-darkBlue text-xl text-center my-10'><span className='font-bold'>Sign up today</span> and manage your portfolio like a pro with personalized assistant and access to a trusted tech community of 1,200 members who connected $150M+ of total assets. </p>
        </div>

    )
}

export default MobileHero