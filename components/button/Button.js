
const Button = ( {children, onClick} ) => {
  return (
    <div 
        className="px-4 py-2 bg-green-500 bg-gradient-to-r outline-none text-white relative z-10 hover:bg-green-800 hover:cursor-pointer"
        onClick={onClick ? ()=> onClick() : null}
    >
        {children}
    </div>
  );
};

export default Button;
