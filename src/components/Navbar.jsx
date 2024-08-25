import React from "react";

function Navbar() {
    const menu = () => {
        const menu = document.getElementById("menu");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    };

    return (
        <>
            <div className="a1 lg:px-12  h-12 w-[90%] bg-[#ffffff1b] backdrop-filter backdrop-blur-lg shadow-sm shadow-[#000000] z-10 fixed top-0 left-0 right-0 mx-auto mt-5 flex justify-between items-center rounded-3xl px-3 pb-2">
                <div
                    onClick={menu}
                    className='bg-[url("/menu.png")] lg:hidden  h-10 w-12 bg-cover bg-no-repeat'
                ></div>
                <div className="pt-1">
                    <img src="/mc.svg" alt="lOgO" width="160rem" />
                </div>
                <div className='hidden lg:flex '>
                    <ul className="flex gap-16 pt-1 text-[#fff] jersey-10-regular text-3xl justify-evenly" >
                        <li><a href="Home">Home</a></li>
                        <li><a href="Home">Products</a></li>
                        <li><a href="Home">About</a></li>
                        <li><a href="Home">Contact</a></li>
                    </ul>
                 </div >
                <div className='bg-[url("/search.png")] h-10 w-12 bg-cover bg-no-repeat lg:hidden'></div>
            </div>
            <div
                id="menu"
                className="load h-screen w-full bg-[#ffffffda] fixed top-0 z-50 text-black hidden"
            >
                <span
                    onClick={menu}
                    className="absolute top-2 right-5 p-1 text-3xl py- cursor-pointer"
                >
                    X
                </span>
                <div className="h-16 w-full flex justify-center items-center border-black border-b-2">
                    <img src="/mc.svg" alt="" width="200rem" />
                </div>
                <ul className="flex flex-col items-center mt-4 ">
                    <li className="mb-4  border-black border-b-2 w-[80%] text-center p-2 rounded-full">
                        <a
                            href="Home"
                            className="text-xl text-black hover:text-gray-700"
                        >
                            Home
                        </a>
                    </li>
                    <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
                        <a
                            href="Home"
                            className="text-xl textblacke hover:text-gray7000"
                        >
                            Home
                        </a>
                    </li>
                    <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
                        <a
                            href="Home"
                            className="text-xl text-black hover:text-gray-700"
                        >
                            Home
                        </a>
                    </li>
                    <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
                        <a
                            href="Home"
                            className="text-xl text-black hover:text-gray-700"
                        >
                            Home
                        </a>
                    </li>
                    <li className="mb-4 border-black border-b-2 w-[80%] text-center p-2 rounded-full">
                        <a
                            href="Home"
                            className="text-xl text-black hover:text-gray-700"
                        >
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
