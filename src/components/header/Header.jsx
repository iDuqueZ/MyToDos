import React from 'react'
import './header.css'

export default function Header({ children }) {
  return (
    <header>
        <div className='title'>
          <h1>My To<span className='Do'>Do</span><b>.</b><b>.</b><b>.</b></h1>
        </div>
        {children}
    </header>
  )
}
