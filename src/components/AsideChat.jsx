import React from 'react'
import { IoChatbox } from "react-icons/io5";

function AsideChat() {
    const questions = [
        {
            item: "What is GDSC"
        },
        {
            item: "Silver  Oak is corrupted"
        },
        {
            item: "leave SIlver Oka Uni"
        },
        {
            item: "How to center div"
        },
        {
            item: "What is GDSC"
        },
        {
            item: "Silver  Oak is corrupted"
        },

    ]


    return (
        <div style={{ overflow: 'hidden', }} className='overflow-scroll '>
            {questions.map((item, index) => (
                <div key={index} className='flex cursor-pointer text-sm items-center gap-2 text-white flex-nowrap bg-gray-100/20 h-10 mt-5 min-w-[131px] w-[14.5vw] flex-row overflow-hidden px-3 rounded-md '>
                    <IoChatbox />
                    {item.item}
                </div>
            ))}
        </div>

    )
}

export default AsideChat