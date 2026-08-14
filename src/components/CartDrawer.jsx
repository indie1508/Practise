import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrash,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import recipe from "../data/recipes";

const CartDrawer = () => {
const {
    isCartOpen,
    setIsCartOpen,
    cart,setCart
  } = useContext(MyStore);
 const deleteCart=(id)=>{
    setCart(
        cart.filter((recipe)=>recipe.id!==id)
    )
 }
const increment=(id)=>{
  // console.log("Clicked Id",id);
  
      setCart((prev)=>{
        // console.log("Previous cart:", prev);
        return prev.map((val)=>{
            // console.log("Comparing:", val.id, id);
        if(val.id==id){
          return{
            ...val,quantity:(val.quantity||0)+1
          }
        }
        return val
        })
      })
}
const decrement=(id)=>{
  setCart((prev)=>{
    return prev.map ((val)=>{
      if(val.id==id){
        return {
          ...val,quantity:Math.max(1,val.quantity-1)
        }
      }
    })
  })
}
// console.log(cart);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-100 bg-white shadow-2xl z-50 transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b">

        <h2 className="text-2xl font-bold">
          My Cart
        </h2>

        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray-600 hover:text-red-500 text-xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

      </div>


      {/* CART CONTENT */}
      <div className="p-4 h-[calc(100vh-160px)] overflow-y-auto">

        {cart.length === 0 ? (

          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              Cart is empty
            </p>
          </div>

        ) : (

          cart.map((recipe, index) => (
            
            <div
              
              key={index}
              className="flex gap-3 p-3 mb-3 border rounded-xl"
            >
              {/* IMAGE */}
              <img
                src={recipe.url}
                alt={recipe.name}
                className="w-20 h-20 object-cover rounded-lg"
              />


              {/* DETAILS */}
              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-bold">
                    {recipe.name}
                  </h3>

                  <button
                  onClick={()=>deleteCart(recipe.id)}
                   className="text-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>

                </div>


                <p className="text-green-600 font-semibold mt-1">
                  ₹{recipe.price*recipe.quantity}
                </p>


                {/* QUANTITY UI */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                 onClick={()=>decrement(recipe.id)}
                  className="w-7 h-7 bg-gray-200 rounded">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <span>
                    {recipe.quantity}
                  </span>

                  <button 
                  onClick={()=>increment(recipe.id)}
                  className="w-7 h-7 bg-orange-500 text-white rounded">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>


      {/* FOOTER */}

      {cart.length > 0 && (

        <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4">

          <div className="flex justify-between text-lg font-bold mb-3">

            <span>
              Total
            </span>

            <span className="text-orange-500">
              ₹
              {cart.reduce(
                (total, recipe) =>
                  total + Number(recipe.price*recipe.quantity),
                0
              )}
            </span>

          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600">
            Checkout
          </button>

        </div>

      )}

    </div>
  );
};

export default CartDrawer;
