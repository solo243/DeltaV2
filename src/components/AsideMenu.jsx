import React from 'react'
import {
    AiOutlineMessage,
    AiOutlinePlus,
    AiOutlineUser,
    AiOutlineSetting,
} from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import AsideChat from './AsideChat';


function MyAside() {
    return (
        <aside className='bg-[#000] h-full min-w-[200px] w-[18vw] flex border-white/20'>
            <div className=' flex-col  flex h-full w-full'>
                {/* TODO: New chat */}
                <div className=' mt-4 text-white items-center flex self-center'>
                    GDSC Silver Oak
                </div>
                <div className='scroll-auto items-center h-[74%]  w-full flex flex-col border-b-2 border-b-gray-700'>
                    <div className='mt-8 h-10 bg-transparent min-w-[130px] w-[14.5vw] flex items-center flex-row gap-3 p-2 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20'>
                        <AiOutlinePlus className="h-4 w-4" />
                        New chat
                    </div>
                    <AsideChat />
                </div>
                {/* TODO:  this is for chat history */}
                <div>

                </div>
                {/* TODO:  Bottom home and about buttons */}
                <div className='mt-3 text-white flex flex-col gap-3  px-6 '>
                    <a className='flex items-center gap-2 px-3 hover:bg-gray-500/10 w-[99%] rounded-lg h-10 cursor-pointer '>
                        <GoHome className='text-white size-[19px]  ' />
                        Home
                    </a>
                    <a className='flex items-center gap-2 px-3 hover:bg-gray-500/10 w-[99%] rounded-lg h-10 cursor-pointer '>
                        <BsQuestionCircle
                            className='text-white size-[17px] ' />
                        About us
                    </a>
                </div>
            </div>
        </aside>

    )
}

export default MyAside