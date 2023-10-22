import React, {useState } from 'react';
import {FaBars,FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';
function Navigation () {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
    return(
        <div className="container relative mx-auto p-6 top-0">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="pt-2 font-bold">DINARY CUELLAR</h1>
                </div>
                <ul className={nav?"absolute flex-col items-center self-end mt-20 top-0 p-6 space-y-6 bg-black font-semibold text-white sm:w-auto sm:self-center left-6 right-6":"hidden font-semibold md:flex space-x-6"}>
                    <li>
                        <Link to="/">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden cursor-pointer">
                    {nav?<FaTimes size={20}/>:<FaBars size={20}/>}
                </div>
            </div>
        </div>
    )    
}
export default Navigation;