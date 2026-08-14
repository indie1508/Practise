import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartPlus,
  faPen,
  faTrash,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import CartDrawer from "./CartDrawer";

const RecipeCard = ({recipes}) => {
  const {
    productData,
    setProductData,
    setUpdatedData,
    isCartOpen,
    setIsCartOpen,
    cart,
    setCart
  } = useContext(MyStore);
 
  // DELETE
  const deleteRecipe = (id) => {
    setProductData(
      productData.filter((recipe) => recipe.id !== id)
    );
  };
  return (
    <div className="grid grid-cols-2 gap-5 p-4">

      {recipes?.map((recipe) => (

        <div
          key={recipe.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >

          {/* Image */}
          <img
            src={recipe.url}
            alt={recipe.name}
            className="h-44 w-full object-cover"
          />

          {/* Content */}
          <div className="p-4">

            {/* Name + Price */}
            <div className="flex justify-between items-start gap-2">

              <h2 className="text-xl font-bold">
                {recipe.name}
              </h2>

              <span className="text-green-600 font-bold text-lg">
                ₹{recipe.price}
              </span>

            </div>

            {/* Chef */}
            <p className="text-gray-500 text-sm mt-1">
              Chef: {recipe.chefName}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-3 line-clamp-2">
              {recipe.description}
            </p>

            {/* Preparation Time */}
            <div className="flex items-center text-gray-600 text-sm mt-4">

              <FontAwesomeIcon
                icon={faClock}
                className="mr-2"
              />

              {recipe.preptime} min

            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">

              {/* Add To Cart */}
              <button
                onClick={()=>{
                  //  console.log("CLICKED");
                  setCart((prev)=>[
                    ...prev,{
                      ...recipe,quantity:1
                    }
                  ])
                  setIsCartOpen(true)
                }}
               
                className="flex-1 bg-orange-500 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-orange-600"
              >
              <FontAwesomeIcon icon={faCartPlus} />
                Add to Cart
              </button>

              {/* Update */}
              <button
                onClick={() => setUpdatedData(recipe)}
                className="px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>

              {/* Delete */}
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="px-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>

            </div>

          </div>

        </div>

      ))}
    </div>
  );
};

export default RecipeCard;