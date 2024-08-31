"use client";
import { ProductType } from "@/types/product.types";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";
type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="Box">
      <div className="conatiner mx-auto ">
        <div className="box flex  flex-col">
          <div className="box-one"></div>
          <div className="box-two">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-[300px] h-[380px] ">
              <div className="relative ">
                <SlHeart className="mt-3 ml-2 text-xl " />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] object-contain flex  items-center  justify-center"
                />
                <div className="">
                  <h2 className="text-sm font-bold p-2 truncate">
                    {product.title}
                  </h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-lg font-bold text-yellow-600-600 mb-4 ">
                  ${product.price}
                </p>
                <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700-700 transition ease-in-out duration-300 mb-10">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
