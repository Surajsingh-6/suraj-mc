import React from "react";

function Games() {
    const data = [
        {
            img: "/1.jpg",
            title: "Minecraft java & bedrock",
            tags: "sandbox survival, Adventure",
            subtags: "single-player + multiplayer",
        },
        {
            img: "/2.avif",
            title: "Minecraft java & bedrock",
            tags: "sandbox survival, Adventure",
            subtags: "single-player + multiplayer",
        },
        {
            img: "/3.avif",
            title: "Minecraft java & bedrock",
            tags: "sandbox survival, Adventure",
            subtags: "single-player + multiplayer",
        },
        {
            img: "/4.avif",
            title: "Minecraft java & bedrock",
            tags: "sandbox survival, Adventure",
            subtags: "single-player + multiplayer",
        },
    ];
    return (
        <div className="min-h-screen w-full bg-[#171615] text-white jersey-10-regular font-bold text-center pt-5">
            <div className=" text-5xl ">
                DISCOVER OUR GAMES
            </div>
            <div>
                {data.map((items,index) => (
                    <div key={index} className=" mt-2 w-full min-h-[65vh] ">
                        <hr className="border-[#524e4ec2] border-t-2 w-5/6 mx-auto my-8"/>
                        <img src={items.img} alt="Java and Bedrock" className=" w-10/12 m-auto my-4 mt-8 " />
                        <div className="font-extralight text-3xl">{items.title}</div>
                        <div className="text-gray-400 text-sm font-sans">{items.tags}</div>
                        <div className="text-gray-400 text-sm font-sans">{items.subtags}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Games;
