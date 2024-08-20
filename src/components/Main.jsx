import React from 'react'

function Main() {
  return (
    <div className='h-screen w-full bg-[url("/bg.webp")] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col text-white text-5xl px-8 gap-4 text-center jersey-10-regular  font-bold'>
        <div>PLay Minecraft with your friends</div>
        <div>Get the best experience</div>
        <div>Join our server</div>
        <button className='bg-[#ebb1df6c] text-black w-52 rounded-3xl backdrop-filter backdrop-blur-lg m-20 shadow-[#111] shadow-sm'>Play Now</button>
    </div>
  )
}

export default Main