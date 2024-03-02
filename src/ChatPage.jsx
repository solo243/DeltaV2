import React, { useState } from 'react'
import SearchInputArea from './components/SearchInputArea'
import Logo from './assets/react.svg'
import Sidebar from './components/NewAside'
import MyAside from './components/AsideMenu'
function ChatPage() {



    return (
        <div className='bg-[#0E0E0E] w-full h-screen flex '>
            <MyAside />
            {/* <div className=' w-full flex flex-col '>
                <div className=' w-full h-[85%] bg-red-900'>

                </div>
                <div className='bg-red-900 rounded-xl w-[70%] self-center flex  bottom-0 h-[3.5vw] mb-10 absolute'>
                    <input className='bg-white w-[90%]' >

                    </input>
                    <button className='bg-blue-900 px-1 e'>
                        click me
                    </button>
                </div> */}

            <div>

                {/* TODO: For the chat only  */}
                {/* <div className='bg-white w-[100%]  h-[80vh] items-center flex justify-center '>
                <div className='bg-pink-100 w-[90%] h-[100%]'>
                    <div>
                        <div className='bg-red-900 flex flex-row gap-4'>
                            <img src={Logo} className='bg-blue-900 rounded-full' />
                            {message.map((message, index) => (
                                <div></div>
                                // <Message key={index} model={message} />
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

                {/* <div className=' self-end  flex-col  w-[100vw] flex items-center justify-center h-[6vw] mb-3'> */}
                {/* TODO: Search area  */}
                {/* <div className='w-full items-center space-x-[2vw] justify-center overflow-hidden flex'>
                    <textarea placeholder='Enter the prompt here ' rows="1" tabIndex={0} className='w-[75%] text-white p-[0.1vw] h-[3vw] bg-[#212121]  rounded-xl ps-3 ' />
                    <button className='bg-white w-10'>
                        send
                    </button>
                </div> */}

                {/* </div> */}
            </div>
        </div>
    )
}

export default ChatPage