import React from 'react';
import {headerLogo} from '../assets/images';
import {navLinks} from "../constants";
import {hamburger} from '../assets/icons'

const Nav = () => {
    return (
        <header className="padding-x absolute z-10 w-full mt-5">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
                        </li>
                    ))}
                </ul>
{/*TODO: Add logic to hamburger menu.*/}
                <menu>
                    <img src={hamburger} alt="hamburger" width={25} height={25} className="hidden max-lg:block"/>
                </menu>
            </nav>
        </header>
    );
};

export default Nav;