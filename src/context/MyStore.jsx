import { Children, useContext, useEffect ,createContext} from "react";
import { useState } from "react";
import axios from 'axios'
import recipes from "../data/recipes";
export const MyStore=createContext();
export const ContextProvider=({children})=>{
    const [productData,setProductData]=useState(recipes)
    const [updatedData,setUpdatedData]=useState(null)
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cart,setCart]=useState([])
    const [search,setSearch]=useState('')
     return <MyStore.Provider value={{productData,setProductData,
     updatedData,setUpdatedData,
     isCartOpen,setIsCartOpen,
     cart,setCart,
     search,setSearch
     }}>
        {children}
     </MyStore.Provider>
}