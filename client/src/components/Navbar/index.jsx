import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='container'>
            <div className="nav-row">
                <a href="/" className="logo">
                ТонЧек 
                <img src='/static/img/logo.png'/>
                </a>
                <ul className="nav-list">
                    <li className='nav-list__item'>
                        <a href="/howitworks" className="nav-list__link">Як це працює?</a>
                    </li>
                    <li className='nav-list__item'>
                        <a to="/reviews" className="nav-list__link">Відгуки</a>
                    </li>
                    <li className='nav-list__item'>
                        <a to="/contacts" className="nav-list__link">Контакти</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar