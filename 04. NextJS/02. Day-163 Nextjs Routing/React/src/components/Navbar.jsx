
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-pink-500 text-black w-full h-[50px] flex justify-between px-4 items-center">
        <div className="text-xl font-bold">
            Food Villa
        </div>
      <div className="flex gap-4">
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
