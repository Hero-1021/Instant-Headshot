import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { COMPANY_NAME } from '../../constant';
import { FiSearch, FiMenu } from 'react-icons/fi';

const navigationLinks = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About', href: '/about' },
  { label: 'Pages', href: '/pages' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' }
];

function Header() {
  const navigate = useNavigate();
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const handleClick = (url: String) => {
    navigate(`${url}`)
  }

  return (
    <header className="bg-white py-6 flex items-center justify-around px-6 lg:px-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo1.png" alt={COMPANY_NAME} className="h-1/3" />
        </a>
      </div>

      {/* Navigation Section */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navigationLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className={`text-lg font-medium transition-colors ${link.isActive ? 'text-[#7C3AED]' : 'text-gray-700 hover:text-[#7C3AED]'
              }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="block lg:hidden p-2 text-gray-700 hover:text-[#7C3AED]"
        aria-label="Menu"
        onClick={() => {
          setNavbarVisible(!isNavbarVisible)
        }}
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* Action Buttons */}
      <div className="flex items-center space-x-6">
        <button
          className="p-2 text-gray-700 hover:text-[#7C3AED] transition-colors hidden lg:block"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5" />
        </button>
        <button
          className="btn-lg px-6 py-2 bg-[#7C3AED] text-white rounded-full hover:bg-[#6D28D9] transition-colors text-lg font-medium"
          onClick={() => {
            handleClick("/users/sign_in");
          }}
        >
          Get Started
        </button>

      </div>


      <div
        className={`fixed top-0 z-10 right-0 w-64 h-full bg-black text-white transition-transform duration-300 ease-in-out 
          transform ${isNavbarVisible ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <div className="flex justify-between p-4">
          <img src="/sensai-logo.svg" alt="Company Logo" className="h-8" />
        </div>

        <div className="px-4">

        </div>
      </div>
      {isNavbarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-0 z-10"
          onClick={() => setNavbarVisible(false)}
        />
      )}
    </header>
  )
}

export default Header;
