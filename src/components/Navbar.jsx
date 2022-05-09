import { useState } from 'react';
import { CTA } from '.';
import { logo } from '../img';

const navLinks = [
  { title: 'Pricing', href: '#!' },
  { title: 'Product', href: '#!' },
  { title: 'About Us', href: '#!' },
  { title: 'Careers', href: '#!' },
  { title: 'Community', href: '#!' },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="manage" />
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.length > 0 &&
            navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-darkGrayishBlue"
              >
                {link.title}
              </a>
            ))}
        </div>
        <div className="hidden md:block">
          <CTA href="#!" variant="red">
            Get Started
          </CTA>
        </div>
        <button
          type="button"
          className={`${
            openMenu && 'open'
          } block hamburger md:hidden focus:outline-none`}
          onClick={() => setOpenMenu((prevState) => !prevState)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          className={`${
            openMenu ? 'flex' : 'hidden'
          } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          {navLinks.length > 0 &&
            navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.title}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
