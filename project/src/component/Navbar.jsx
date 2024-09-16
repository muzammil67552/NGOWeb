import React, { useState } from 'react';
import Logo from '../images/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid'; // Import the heart icon
import DonationForm from './Donation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [MenuOption, setMenuOption] = useState('');
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value) {
      navigate(`/${value}`);
    }
  };

  const handleMenuChange = (e) => {
    const value = e.target.value;
    setMenuOption(value);
    if (value) {
      navigate(`/${value}`);
    }
  };

  return (
    <>
      <nav className='bg-white flex flex-col md:flex-row justify-between items-center mt-2 px-4 md:px-9'>
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-xl text-black font-bold flex items-center">
            <img src={Logo} alt="Logo" className="w-[66px] h-[66px]" />
          </div>
          <div className='md:hidden'>
            <button onClick={handleToggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
          <ul className='flex flex-col md:flex-row list-none space-y-7 text-sm font-medium text-gray-700 md:space-y-0 md:space-x-9 md:text-lg items-center mt-4 md:mt-0'>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs"> About Us </NavLink>
            </li>
            <li>
              <label htmlFor="options" className="block text-sm font-medium text-gray-700">
                <select
                  id="options"
                  name="options"
                  className="flex flex-col md:flex-row list-none space-y-7 text-sm font-medium text-gray-700 md:space-y-0 md:space-x-9 md:text-lg items-center mt-4 md:mt-0"
                  value={MenuOption}
                  onChange={handleMenuChange}>
                  <option value={MenuOption} disabled>Our Work</option>
                  <option value="HelpJobBank">Help Job Bank</option>
                  <option value="LegalAid">Legal Aid </option>
                  <option value="FoodAid">Food Aid </option>
                  <option value="PoorPeopleSupport">Orphan Support </option>
                  <option value="HealthCare"> Health Care </option>
                  <option value="ShadiMubark">Shadi Mubark </option>
                  <option value="HelpEducation">Help Education </option>
                  <option value="OldAgeHome">Old Age Home</option>
                  <option value="BloodDonation">Blood Donation </option>
                  <option value="MEdicineCharity"> Medicine Charity </option>
                  <option value="WaterPlant"> Water Plant </option>
                </select>
              </label>
            </li>
            <li>
              <label>
                <select
                  id="options"
                  name="options"
                  className="flex flex-col md:flex-row list-none space-y-7 text-sm font-medium text-gray-700 md:space-y-0 md:space-x-9 md:text-lg items-center mt-4 md:mt-0"
                  value={selectedOption}
                  onChange={handleSelectChange}>
                  <option value={selectedOption} disabled>Our Impact</option>
                  <option value="NewsAndStories"> News And Stories </option>
                  <option value="OurPartners"> Our Partners </option>
                  <option value="Awards"> Awards </option>
                </select>
              </label>
            </li>
            <li>
              <NavLink to="/OurMembers"> Our Members </NavLink>
            </li>
            <li>
              <NavLink to="/Contact"> Contact Us </NavLink>
            </li>
          </ul>

          <div className='flex justify-center md:justify-start mt-4 md:mt-3 md:ml-4 md:mb-2'>
            <NavLink to="/DonationForm" className='bg-red-500 p-2 md:p-3 rounded-lg border-none px-6 md:px-8 text-white text-base flex items-center'>
              <HeartIcon className="h-6 w-6 mr-2" /> {/* Add heart icon */}
              Donate Now
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
