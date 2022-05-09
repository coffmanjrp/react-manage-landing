const CTA = ({ children, href, variant }) => {
  const red = ['text-white', 'bg-brightRed', 'hover:bg-brightRedLight'];
  const white = [
    'bg-white',
    'shadow-2xl',
    'text-brightRed',
    'hover:bg-gray-300',
  ];
  const variantClasses = variant === 'red' ? red : white;

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
