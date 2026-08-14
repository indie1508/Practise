import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MyStore } from '../context/MyStore';
import recipe from '../data/recipes';
const NavBar = () => {
  const {productData,search,setSearch}=useContext(MyStore)
  // console.log(productData);
  
  // console.log(search);

  
  return (
    <div className='h-16 flex bg-white justify-center items-center gap-10'>
       <h1>Recipe Hub</h1>
       <div className='h-14 w-2xl bg-white flex justify-center items-center relative'>
        <FontAwesomeIcon className='absolute left-2' icon={faMagnifyingGlass} />
        <input 
       type='text'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
        className='h-12 w-2xl flex pl-12 outline-1 rounded-2xl ' placeholder='Searcg Recipe'/>
       </div>
       <div className='flex justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faCartPlus} className="text-2xl"/>
          <img src="" alt="" className='h-12 w-12 rounded-4xl bg-black' />
       </div>
    </div>
  )
}

export default NavBar