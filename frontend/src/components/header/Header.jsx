import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
        <header>
            <div className="center">
                <div className="logo"><span>Logo</span></div>

                <div className="menu">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Registrar</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <hr />
        </header>

    
    </>
    
  )
}

export default Header