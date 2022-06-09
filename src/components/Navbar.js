import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// const btn_home = document.querySelector('.btn_home');
// const btn_dest = document.querySelector('.btn_destination');
// const btn_crew = document.querySelector('.btn_crew');
// const btn_tech = document.querySelector('.btn_technology');
// const tab = [btn_home, btn_dest, btn_crew, btn_tech];

// function homeIsActive() { retreiveActiveClass(); btn_home.classList.add('active'); }
// function destIsActive() { retreiveActiveClass(); btn_dest.classList.add('active'); }
// function crewIsActive() { retreiveActiveClass(); btn_crew.classList.add('active'); }
// function techIsActive() { retreiveActiveClass(); btn_tech.classList.add('active'); }

// function retreiveActiveClass() {
//     tab.forEach(element => {
//         element.classList.remove('active')
//     });
// }

// function test() {
//     console.log("OK ");
// }

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                        </Link>
                    </div>
                    <div className='navbar-line'>

                    </div>
                    <div className='navbar-list'>
                        <ul className='list'>
                            <li className='navbar-item'>
                                <Link to='/' className='navbar-links btn_home'>
                                    <span className='br'>00</span> HOME
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to='/destination' className='navbar-links btn_destination'>
                                    <span className='br'>01</span> DESTINATION
                                </Link>
                            </li>
                            <li className='navbar-item' >
                                <Link to='/crew' className='navbar-links btn_crew'>
                                    <span className='br'>02</span> CREW
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to='/technology' className='navbar-links btn_technology'>
                                    <span className='br'>03</span> TECHNOLOGY
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar