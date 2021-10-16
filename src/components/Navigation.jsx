import React from 'react';
import './styles/nav.scss';
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <div className='nav-top'>
            <nav className="nav">
                <div>
                    <Link to="/" className="logo">LOGOS</Link>
                </div>
                <ul className="links">
                    <li >
                        <Link to="/table" className="links_li">Table</Link>
                    </li>
                    <li>
                        <Link to="/game" className="links_li">Game</Link>
                    </li>
                    {/* <li>
                        <Link to="/cards" className="links_li">
                            Cards
                        </Link>
                    </li> */}
                </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffafbd" fill-opacity="1" d="M0,320L20,282.7C40,245,80,171,120,165.3C160,160,200,224,240,240C280,256,320,224,360,186.7C400,149,440,107,480,101.3C520,96,560,128,600,144C640,160,680,160,720,144C760,128,800,96,840,101.3C880,107,920,149,960,160C1000,171,1040,149,1080,128C1120,107,1160,85,1200,101.3C1240,117,1280,171,1320,181.3C1360,192,1400,160,1420,144L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
        </div>
    )
}

export default Navigation
