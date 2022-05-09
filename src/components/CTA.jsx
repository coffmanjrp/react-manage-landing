import { useEffect, useState } from 'react';

const CTA = ({ children, href, variant }) => {
  const [variantClasses, setVariantClasses] = useState([]);

  useEffect(() => {
    switch (variant) {
      case 'red':
        setVariantClasses([
          'text-white',
          'bg-brightRed',
          'hover:bg-brightRedLight',
        ]);
        break;
      case 'white':
        setVariantClasses([
          'bg-white',
          'shadow-2xl',
          'text-brightRed',
          'hover:bg-gray-300',
        ]);
        break;
      case 'gray':
        setVariantClasses([
          'bg-gray-600',
          'text-white',
          'hover:bg-white',
          'hover:text-brightRed',
        ]);
        break;
      default:
        setVariantClasses([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <a
      href={href}
      className={`p-3 px-6 pt-2 rounded-full baseline ${variantClasses.join(
        ' '
      )}`}
    >
      {children}
    </a>
  );
};

export default CTA;
