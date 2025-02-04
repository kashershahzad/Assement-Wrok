import React from 'react';

const Security = () => {
  const items = [
    {
      id: 1,
      img: '/images/Logo1.png',
      title: 'Cloud Infrastructure',
      description: 'Our application is built on the same reliable, scalable infrastructure used to power AMAZON.com’s global web properties. We ensure that the data can only be accessed by authorized roles and services with audited access.'
    },
    {
      id: 2,
      img: '/images/Logo2.png',
      title: 'Secure Broker Connection',
      description: 'Brokerage Account Linking is done though our partner Plaid which handles credential validation (including multi-factor authentication) for each institution it supports and provides your account transaction history and holdings structure to StockClubs using secure access tokens.'
    },
    {
      id: 3,
      img: '/images/Logo3.png',
      title: 'Data Encryption',
      description: 'The combination of the Advanced Encryption Standard (AES-256) and Transport Layer Security (TLS) keeps your personal infomation safe. We encrypt data in transit between our services and at rest.'
    }
  ];

  return (
    <div className='bg-[#009BCC] bg-cover bg-center lg:p-20 p-5'
    style={{
        backgroundImage: "url('/images/icon.svg')",
        backgroundSize: "cover",
        backgroundPosition: "start"
    }}
>
    <p className='text-center text-white text-3xl font-bold mb-10 '>SECURITY IS OUR PRIORITY</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg">
            <div className='flex items-center justify-center'>
            <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-md mb-4" /></div>
            <h2 className="text-2xl font-bold text-center mb-2 text-darkBlue ">{item.title}</h2>
            <p className="text-darkBlue text-center text-lg">{item.description}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-16'>
      <button className='py-4 px-12 font-bold bg-[#FFC730] rounded-lg text-white'>Learn More About Security</button>
      </div>
    </div>
    
  );
};

export default Security;
