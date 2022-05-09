import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYoutube,
  logoWhite,
} from '../img';

const socialMediaLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: iconFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: iconInstagram,
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com',
    icon: iconPinterest,
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com',
    icon: iconTwitter,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com',
    icon: iconYoutube,
  },
];

const footerLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Pricing',
    href: '#!',
  },
  {
    name: 'Products',
    href: '#!',
  },
  {
    name: 'About',
    href: '#!',
  },
  {
    name: 'Careers',
    href: '#!',
  },
  {
    name: 'Comunity',
    href: '#!',
  },
  {
    name: 'Privacy Policy',
    href: '#!',
  },
];

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
          <div>
            <img src={logoWhite} alt="manage" className="h-8" />
          </div>
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.length > 0 &&
              socialMediaLinks.map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={media.icon} alt={media.name} className="h-8" />
                </a>
              ))}
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            {footerLinks.length > 0 &&
              footerLinks.slice(0, 4).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-brightRed"
                >
                  {link.name}
                </a>
              ))}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {footerLinks.length > 0 &&
              footerLinks.slice(4, 8).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-brightRed"
                >
                  {link.name}
                </a>
              ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox..."
              />
              <button
                type="button"
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
