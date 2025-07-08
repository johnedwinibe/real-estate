import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-white'>
      <div className='flex-grow w-screen'>
        <img 
          className='w-full object-cover' 
          src='src/assets/BA9A0108.JPEG'
          alt='Wedding' 
        />
      </div>
    </div>
  );
}

export default Home;
