import React from 'react'
import './footer.css'

export default function Footer({children}) {
    return (
        <footer className='hidden'>
            {children}
        </footer>
    )
}
