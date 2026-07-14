import React from 'react';
import navlink from '@/Models/nav-link';

export default function Navbar() {
    {/* copied from bootstrap*/ }
    return (
        <nav className="navbar navbar-expand-lg position-fixed border-bottom">
            <span className="switching-color navbar-heading"  style={{width:'40vw',paddingLeft:'7vw'}}>Raj Gupta</span>
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    {
                        navlink.map((item, index) => {
                            return <li className="nav-item" key={index}>
                                <a className="nav-link switching-color" href={item.url}>
                                   {item.icon}
                                    &ensp;
                                   {item.text}
                                </a>
                            </li>;
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}
