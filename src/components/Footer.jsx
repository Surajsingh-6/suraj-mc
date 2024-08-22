import React from 'react'

function Footer() {
    const data=["Privacy and Cookies","Terms of Use","Trademarks","About our ads","© 2024 Microsoft"]
    const info=[
        {
            title:"Games",
            tags:["Minecraft","Minecraft Dungeons","Minecraft Education","MineCraft Legends"],
        },
        {
            title:"Shop",
            tags:["Marketplace","Minecraft shop"],

        },
        {
            title:"Community",
            tags:["Minecraft forum","Minecraft wiki","Minecraft support"],
        },
        {
            title:"Support",
            tags:["Help","Minecraft support","Feedback","Contact us","Tips  For Beginners","Download"],
        },
        {
            title:"Account",
            tags:["My account","Minecraft login","Minecraft account","Minecraft password"],
        }
    ]
  return (

    <div className='text-white '>
        <div className='footer1 min-h-24 w-full bg-[#111111] flex items-center flex-wrap '>
            {info.map((item,index)=>( 
                <div key={index} className='  min-w-12 m-3'>
                    <div className='text-xl text-white my-2'>{item.title}</div>
                    <div className='flex flex-col gap-1'>
                        {item.tags.map((tag)=>(
                            <div className='text-xs text-green-400'>{tag}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className='footer2 min-h-16 bg-[rgb(46,45,45)] font-sans w-full text-xs text-[#ffffff] flex flex-wrap items-center'>
            {data.map((item)=>(
                <div className='mx-2'>{item}</div>
            ))}
        </div>
    </div>
  )
}

export default Footer