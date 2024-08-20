import React from "react";

function Navbar() {
  const menu = () => {
    const menu = document.getElementById('menu')
    if(menu.classList.contains('hidden')){
      menu.classList.remove('hidden')
    }else{
      menu.classList.add('hidden')
    }
  }
  
  return (
    <>
        <div className="a1 h-12 w-[90%]  bg-[#ffffff1b] backdrop-filter backdrop-blur-lg shadow-sm shadow-[#000000] z-10 absolute top-0 left-0 right-0 mx-auto mt-5 flex justify-between items-center rounded-3xl px-3 pb-2">
          <div onClick={menu} className='bg-[url("/menu.png")]  h-10 w-12 bg-cover bg-no-repeat'></div>
          <div className="pt-1">
            <img src="/mc.svg" alt="lOgO" width="160rem" />
          </div>
          <div className='bg-[url("/search.png")] h-10 w-12 bg-cover bg-no-repeat'></div>
        </div>
        <div id="menu" className="load h-screen w-full bg-[#ffffffda] absolute z-50 text-black hidden">
          <span onClick={menu} className="absolute top-2 right-5 p-1 text-3xl py- cursor-pointer">X</span>
          <div className="h-16 w-full flex justify-center items-center border-black border-b-2">
            
            <img src="/mc.svg" alt="" width="200rem" />
          </div>
          <ul className="flex flex-col items-center mt-4 ">
            <li className="mb-4  border-black border-b-2 w-[80%] text-center p-2 rounded-full">
              <a href="Home" className="text-xl text-black hover:text-gray-700">Home</a>
            </li>
            <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
              <a href="Home" className="text-xl textblacke hover:text-gray7000">Home</a>
            </li>
            <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
              <a href="Home" className="text-xl text-black hover:text-gray-700">Home</a>
            </li>
            <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
              <a href="Home" className="text-xl text-black hover:text-gray-700">Home</a>
            </li>
            <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
              <a href="Home" className="text-xl text-black hover:text-gray-700">Home</a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Navbar;