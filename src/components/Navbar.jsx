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
        <a
          href="#!"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
