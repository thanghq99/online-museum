
const Button = ( {children, ...props} ) => {
  return (
    <div 
        {...props}
        className="px-4 py-2 bg-green-500 bg-gradient-to-r outline-none text-white relative z-10 hover:bg-green-800 hover:cursor-pointer"
    >
        {children}
    </div>
  );
};

export default Button;
