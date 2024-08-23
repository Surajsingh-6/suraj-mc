import React, { useState } from "react";

function Sections({ title, image, text, url }) {
    const [expand, setexpand] = useState(false);
    const handleExpand = () => {
        setexpand(!expand);
    };
    return (
        <div className="min-h-24 p-4  border-b-2 section top-right text-white border-[#000000] ">
            <div className="flex items-center justify-between ">
                <img src={image} alt={title} className="h-16" onClick={handleExpand} />
                <div className="ml-2 text-white jersey-10-regular text-3xl" onClick={handleExpand}>
                    {title} 
                </div>
                <div onClick={handleExpand} className="text-2xl"> &#8744;</div>
            </div>
            {expand && (
                <div className="my-5 p-4"> 
                    <img src={url} alt="title" />
                    <p className="text-[#dadada]">{text}</p>
                    <button className="h-12 border-2 mt-4 w-40  bg-green-800">LEARN MORE &gt; </button>
                </div>
            )}
        </div>
    );
}

export default Sections;
