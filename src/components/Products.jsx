import React from "react";
import background from "../utils/products/background.jpg";
import { product } from "../utils/constant";

import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart, CiShuffle } from "react-icons/ci";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/shopSlice";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import './styles.css';

// import required modules
// import { FreeMode, Pagination } from "swiper/modules";

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mb-[200px]">
      <div className="relative">
        <img
          src={background}
          alt="background"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-[-40%] flex  gap-5 ml-16">
          {product.map((item) => (
            <div className="w-[280px] bg-white shadow-sm group ">
              <img src={item.image} alt="product" className="" />
              <h1 className="text-center text-lg "> {item.name}</h1>
              <p className="text-center font-semibold text-lime-800">
                {" "}
                {item.price}
                {item.price && " تومان"}
              </p>
              <div className="flex absolute bg-white shadow-lg gap-3 bottom-20 p-2 duration-200 opacity-0 ml-[78px] group-hover:opacity-100 group-hover:bottom-28">
                {/* <Link to='/product'> */}
                <button onClick={() => handleAddToCart(product)}>
                  <PiShoppingCartLight
                    size="1.8em"
                    className="hover:opacity-80"
                  />
                </button>
                {/* </Link> */}
                <CiHeart size="1.8em" className="hover:opacity-80" />
                <CiShuffle size="1.8em" className="hover:opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
