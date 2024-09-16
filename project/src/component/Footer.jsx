import React from 'react';
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTwitterSquare, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-red-600 pt-8 pb-6 text-white ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">"Together, We Make a Difference."</h4>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <a href='https://www.facebook.com/profile.php?id=61558394109139' target='__jump'><FaFacebook  className='shadow-xl hover:shadow-black hover:text-blue-600 '   /></a>
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
              <a href='https://www.youtube.com/@helphumanrights' target='__jump'><FaYoutube className='shadow-xl hover:shadow-black hover:text-red-700 '  /></a>
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
                <a href='https://www.instagram.com/' target='__jump'><FaInstagramSquare className='shadow-xl hover:shadow-black hover:text-pink-600 ' /></a>
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none text-black focus:outline-none" type="button">
               <a href='' target='__jump'><FaTwitterSquare className='shadow-xl hover:shadow-black hover:text-blue-500 ' /></a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex flex-wrap items-top">
            <div className="w-full lg:w-6/12 px-4 lg:pl-0">
              <span className="block uppercase mb-7 text-2xl font-semibold text-white">About HELP</span>
              <ul className="list-unstyled">
                <li className='mb-2'>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className='mb-2'>
                  <NavLink to="/aboutUs">About Us</NavLink>
                </li>
                <li className='mb-2'>
                  <NavLink to="/ourWork">Our Work</NavLink>
                </li>
                
                <li className='mb-2'>
                <NavLink to="/ourMembers">Our Members</NavLink>
                </li>
                <li className='mb-2'>
                <NavLink to="/Contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-6/12 px-4 lg:ml-auto lg:mr-0">
              <span className="block uppercase mb-7 text-2xl font-semibold text-white ">Information</span>
              <ul className="list-unstyled">
                <li className="flex items-center mb-4">
                  <FaEnvelope className="text-lg mr-2 " />
                  <span className='text-white'>info@helphumanrights.com.pk
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <FaPhoneAlt className="text-lg mr-2" />
                  <span className='text-white'>021-34922256</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-lg mr-2" />
                  <span className='text-white'>Askari Amusement Park, Old Sabzi Mandi, near Faizan e Madina، Gulshan-e-Iqbal, Karachi, 75300</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-3 border-blueGray-300 shadow-2xl border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold ">
              Copyright © <span id="get-current-year" className='text-white'>2024</span>
              <a className="hover:text-gray-300" target="_blank" href="#"> HELP</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
