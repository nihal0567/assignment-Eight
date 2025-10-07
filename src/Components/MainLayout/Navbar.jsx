import { Github } from 'lucide-react';
import React from 'react';
import homeIcon from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (  
        <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
            <li>
                <NavLink className="" to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/app' >Apps</NavLink>
            </li>
            <li>
                <NavLink to='/countedApp' >Installation</NavLink>
            </li>
            </ul>
            </div>
            <div className='flex items-center gap-1 md:ml-10'>
                <img className='w-5 md:w-10' src={homeIcon} alt="" />
            <NavLink to='/' className="font-bold text-[#5b24db] text-xs md:text-xl">HERO.IO</NavLink>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu font-semibold menu-horizontal px-1">
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/app' >Apps</NavLink>
            </li>
            <li>
                <NavLink to='/countedApp' >Installation</NavLink>
            </li>
            </ul>
        </div>
        <div className="navbar-end">
            
            <a className="btn text-white font-semibold mr-3 md:mr-10 bg-gradient-to-r from-[#4311b6] [#2f2052] "><span><Github/></span> Contribute</a>
        </div>
        </div>
    );
};

export default Navbar;