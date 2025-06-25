import { React, createRef } from 'react';
import Menu from './assets/menu.png';
import Rg from './assets/RG.png';
import { Link } from 'react-router-dom';
import './index.css';

export default function Nav() {
    const myRef = createRef();
    const togglemenu = () => {
        const navLink = myRef.current;
        navLink.classList.toggle('top-[55px]'); // Toggle the menu visibility
    }

    return (
        <header className=" bg-sky-950 w-full md:fixed top-0 left-0  "> {/* Fixed positioning */}
            <nav className="flex justify-around items-center pt-4 pb-4 text-white md:px-10">
                <h1 className="md:w-[180px] font-bold text-[20px]">
                    <img className='w-10 inline mr-[5px]' src={Rg} alt="" />CREATION
                </h1>
                <div ref={myRef} className="md:static absolute md:min-h-fit bg-sky-950 min-h-[60vh] left-0 top-[-100%] w-full flex justify-center items-center">
                    <ul className="items-center flex md:flex-row flex-col md:item-center md:gap-[25px] gap-[30px] font-semibold">
                        <li className="links"><Link to="/">Home</Link></li>
                        <li className="links"><Link to="/about">About</Link></li>
                        <li className="links"><Link to="/services">Services</Link></li>
                        <li className="links"><Link to="/projects">Projects</Link></li>
                        <li className="links"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='flex gap-[20px]'>
                    <a href="tel:+919786103747">
                        <button className="bg-[white] text-black px-3 py-1 rounded-full hover:bg-[grey] font-bold">CALL</button>
                    </a>
                    <button onClick={togglemenu}>
                        <img className='w-[30px] cursor-pointer md:hidden' src={Menu} alt="" />
                    </button> 
                </div>
            </nav>
        </header>
    );
}
