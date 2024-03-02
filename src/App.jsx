import { useState } from 'react'
import './App.css'
import ChatPage from './ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#0E0E0E] w-full h-screen'>
      <ChatPage />
    </div>
  )
}

export default App
