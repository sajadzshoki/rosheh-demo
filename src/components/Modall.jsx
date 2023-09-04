import React from "react";

import Modal from "react-modal";

import { RxCross2 } from "react-icons/rx";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    height: "100%",
    width: "350px",
    
  },
};
const Modall = ({ openModal, closeModal, modalIsOpen }) => {
  return (
    <div className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        
      >
        <div className="flex items-center justify-between border-b-2 pb-4 ">
          <button onClick={closeModal}>
            <RxCross2
              onClick={closeModal}
              size="2em"
              className="hover:text-red-500"
            />
          </button>

          <h1 className="text-3xl">سبد خرید</h1>
        </div>

        <div className="flex flex-col justify-start items-center mt-10 ">
          <BsCartX size="4.5em" opacity="0.2" />
          <p className="my-5 font-semibold">منتظر انتخاب شما هستیم</p>
          <Link to="/">
            <button
              onClick={closeModal}
              className="bg-lime-700 text-white px-2 py-1 rounded-full"
            >
              بازگشت به صفحه‌ اصلی
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default Modall;
