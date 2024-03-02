import { useNavigate, Link } from "react-router-dom";
import image from "../images/navlogo.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" bg-white p-4 border-b border-black  w-full">
        <div className="flex items-center justify-between">
          <img
            src={image}
            width="150px"
            className="ml-20"
            onClick={() => navigate("/")}
          />
          <div className="md:hidden">
            <button className="text-black" onClick={toggleMenu}>
              <svg
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-12 font-mono font-bold">
            <Link to="/">
              <li className="text-lg ">Home</li>
            </Link>
            <li className="text-lg">About</li>
            <li className="text-lg">Contact us</li>
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="flex-col md:hidden">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact us</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
