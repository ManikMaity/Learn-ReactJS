import React from 'react'
import Sidebar from './coponents/Sidebar.jsx'
import Player from './coponents/Player.jsx'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
      </div>
      <Player/>

    </div>
  )
}

export default App

