import React from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <div >
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
                    <li>
                        <Link to="/cards" className="links_li">
                            Cards
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
