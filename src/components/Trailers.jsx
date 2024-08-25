import React from "react";
import Sections from "./Sections";
function Trailers() {
    const sectionsData = [
        {
            title: "Minecraft",
            image: "/app1.png",
            url:"/vid1.webp",
            text: "Explore your own unique worlds, survive the night, and create anything you can imagine! Watch the sample video of Minecraft gameplay above, or select 'watch the trailer' to see the full video on YouTube.",
        },
        {
            title: "Minecraft Dungeons",
            image: "/app2.png",
            url:"/vid2.gif",
            text: "Discover an action-adventure game inspired by classic dungeon crawlers Watch the sample video of Minecraft Dungeons gameplay above, or select 'watch the trailer' to see the full video on YouTube.",
        },
        {
            title: "Minecraft Legends",
            image: "/app3.webp",
            url:"/vid3.gif",
            text: "Lead your allies in heroic battles in the action-strategy game Minecraft Legends.Watch the sample video of Minecraft Legends gameplay above, or select 'watch the trailer' to see the full video on YouTube.",
        },
        {
            title: "Minecraft Education",
            image: "/app4.avif",
            url:"/vid4.webp",
            text: "A game-based learning platform supporting thousands of educators in over 100 countries.Watch the sample video of Minecraft Education gameplay above, or select 'watch the trailer' to see the full video on YouTube.",
        }
    ];
    return (
        <div className="min-h-screen w-full">
            <div className=" jersey-10-regular text-5xl my-12  h-20 w-full  mx-auto text-white text-center lg:text-8xl">GAMEPLAY TRAILERS</div> 
            {sectionsData.map((section, index) => (
                <Sections key={index} {...section} />
            ))}
        </div>
    );
}
export default Trailers;
