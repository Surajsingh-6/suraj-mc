import React, { useState } from "react";

function Sections({ title, image, text, url }) {
    const [expand, setexpand] = useState(false);
    const handleExpand = () => {
        setexpand(!expand);
    };
    return (
        <div className="min-h-24 p-4  border-2 section text-white">
            <div className="flex items-center justify-between ">
                <img src={image} alt={title} className="h-16" />
                <div className="ml-2 text-white" onClick={handleExpand}>
                    {title} 
                </div>
                <div> &#8744;</div>
            </div>
            {expand && (
                <div> 
                    <img src={url} alt="title" />
                    <p>{text}</p>
                    <button>LEARN MORE &gt; </button>
                </div>
            )}
        </div>
    );
}

export default Sections;
