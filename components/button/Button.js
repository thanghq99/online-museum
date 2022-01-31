
const Button = ( {children, onClick} ) => {
  return (
    <div 
        className="px-4 py-2 bg-green-500 outline-none text-white relative z-10 hover:bg-green-700 hover:cursor-pointer"
        onClick={()=> onClick()}
    >
        {children}
    </div>
  );
};

export default Button;
