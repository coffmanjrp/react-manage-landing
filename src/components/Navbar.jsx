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
      </div>
    </nav>
  );
};

export default Navbar;
