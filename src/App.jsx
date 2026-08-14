import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import RecipeCard from './components/RecipeCard'
import Form from './components/Form'
import CartDrawer from './components/CartDrawer'
import { MyStore } from './context/MyStore'
const App = () => {
  let {productData,search,isCartOpen,setIsCartOpen}=useContext(MyStore)
//  console.log("isCartOpen:", isCartOpen);
// console.log("Cart:", setIsCartOpen);
    const filterRecipe=productData.filter((recipe)=>{
    return recipe.name.toLowerCase().includes(search.toLowerCase())
  })
  // console.log(filterRecipe);
  return (
    <div className='p-2'>
       <NavBar/>
       <div className='h-screen w-screen bg-amber-50 flex justify-center items-start'>
         <div className='flex justify-between items-start h-220 w-300 bg-cyan-700 mt-6'>
          <div className='m-2 h-215 w-100 bg-emerald-50'>
            <Form/>
          </div>
          <div>
            <div className='h-190 w-200 m-2 flex flex-col'>
              <div className='shrink-0'>
              <h1 className='text-xl m-2'>Discover Recipes</h1>
              <h5 className='text-s m-2'>Top curated recipes for your meal</h5>
              </div>
             <div className='flex-1 overflow-y-auto'>
              <RecipeCard recipes={filterRecipe}/>
             </div>
            </div>
          </div>
         </div>
           <div className={isCartOpen ? "flex" : "hidden"}>
           <CartDrawer/>
           </div>
       </div>
      
    </div>
  )
}

export default App
