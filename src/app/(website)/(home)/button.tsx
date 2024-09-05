

// const Button: React.FC =()=>{
//     return (
//         <div className=" font-lato flex justify-center items-center">
//           <button className="py-3 px-6 bg-brand-700 text-brand-50 rounded-sm">
//             BOOK NOW
//           </button>
//         </div>
//     );
    
// }

// export default Button;

interface ButtonProps {
  text: string;
  color?: string; 
  textColor?: string; 
  border?: string; 
  radius?: string; 
  onClick?: () => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "bg-brand-700", 
  textColor = "text-brand-50", 
  border = "border-none", 
  radius = "rounded-sm", 
  onClick,
}) => {
  return (
    <button
      className={`px-6 py-3 font-lato max-w-40 ${color} ${textColor} ${border} ${radius} font-bold hover:opacity-90 transition duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;