import { useState } from 'react'
import './App.css'
import './cursor.js'

function App() {
  return (
    <div className="m-0 min-h-screen overflow-x-hidden cursor-none hero-bg before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:z-0">
      <div className="game-cursor w-[32px] h-[32px] fixed top-0 left-0 pointer-events-none -transform-x-1/2 -transform-y-1/2 z-[9999] mix-blend-screen">
        <div className="game-cursor-lines"></div>
      </div>
    </div>
  );
}

export default App
