import { useState } from 'react';
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	const [show, setShow] = useState(false);
	
  return (
    <div className="bg-black opacity-80 w-full py-2 fixed z-10 ">
     <header className=" dark:text-white">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} className='w-[70px]' alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Home</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">About</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Services</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/gallery" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Gallery</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Contact</NavLink>
			</li>
			
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center bg-[#029f85] text-white font-semibold px-8 py-3 rounded">Sign in</button>
			
		</div>
		<button onClick={()=>setShow(!show)} className="p-4 relative lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
							{
						show && <ul className=" absolute left-0 bg-base-200 shadow-xl">
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Home</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">About</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Services</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/gallery" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Gallery</NavLink>
			</li>
			<li id='navbar' className="flex">
				<NavLink rel="noopener noreferrer" to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Contact</NavLink>
			</li>
			
		</ul>
					}
					</button>
				
					
	</div>
</header>
    </div>
  );
};

export default Navbar;