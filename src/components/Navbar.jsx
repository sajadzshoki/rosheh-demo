import React from "react";
import logo from "../utils/logo-rosheh.png";
import { navbarItems } from "../utils/constant";
import { icons } from "../utils/constant";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = ({openModal}) => {

  const cartItems = useSelector((state)=>state.cartItems)
  return (
    <div className=" bg-white flex justify-between px-12 py-5 border-b-4 items-center ">
      <div className="flex">
        <button onClick={openModal}>
          <CiShoppingBasket size="1.8em" className="mx-2" />
        <small className="bg-lime-500 w-4 h-4 top-8 left-12 rounded-full absolute">{cartItems}</small>
        </button>
        {icons.map((icon) => (
          <a href="/" title={icon.name} className="hover:opacity-80">
            {icon.icon}
          </a>
        ))}
      </div>
      <div>
        <ul className="flex flex-row-reverse">
          {navbarItems.map((item) => (
            <a
              href={item.link}
              className="mx-2 font-bold text-lg hover:text-lime-800"
            >
              {item.name}
            </a>
          ))}
          <a href="/" className="text-lime-800 mx-2 font-bold text-lg">
            <p className="inline-block rotate-180 "> برعکس</p>
            صفحه
          </a>
        </ul>
      </div>
      <Link to="/">
        <img src={logo} alt="logo" className="h-16" />
      </Link>
    </div>
  );
};

export default Navbar;
