import React from 'react'
import { Square } from './components/Square'
import { Board } from './components/Board'

function App() {
  return (
    <div className='min-h-screen grid place-content-center text-3xl'>
    <Board/>
    </div>
  )
}

export default App