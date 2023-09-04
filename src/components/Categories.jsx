import React from "react";
import { categories } from "../utils/constant";
const Categories = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-4 py-8 px-12">
      {categories.map((categorie) => (
        <div className="overflow-hidden h-[250px] md:h-[500px] md:w-[250px] relative">
          <img
            src={categorie.image}
            alt=""
            className="h-full object-cover duration-500 brightness-75 hover:scale-[1.1] hover:brightness-50 "
          />
          <h1 className="text-white font-semibold text-4xl absolute bottom-5 right-[35%]">{categorie.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Categories;
