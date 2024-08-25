import React, { useState } from "react";

function Sections({ title, image, text, url }) {
  const [expand, setexpand] = useState(false);
  const handleExpand = () => {
    setexpand(!expand);
  };

  return (
    <div className="lg:flex lg:justify-between min-h-20 p-4 lg:p-0 w-full border-b-2 section top-right text-white border-[#000000]">
      <div className="flex items-center justify-between lg:w-1/4 lg:border-r-4 lg:border-[#242322] lg:h-20 lg:p-2">
        <img src={image} alt={title} className="h-16" onClick={handleExpand} />
        <div className="ml-2 text-white jersey-10-regular text-3xl lgmx-auto" onClick={handleExpand}>
          {title}
        </div>
        <div onClick={handleExpand} className="text-2xl lg:hidden">&#8744;</div>
      </div>
      {expand && (
        <div className="my-5 p-4 lg:w-3/4">
          <img src={url} alt="title" className="lg:w-full" />
          <p className="text-[#dadada]">{text}</p>
          <button className="h-12 border-2 mt-4 w-40 bg-green-800">LEARN MORE &gt;</button>
        </div>
      )}
    </div>
  );
}

export default Sections;