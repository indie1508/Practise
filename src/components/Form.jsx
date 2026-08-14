import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MyStore } from '../context/MyStore'
import {nanoid} from 'nanoid'
const Form = () => {
  let {productData,setProductData,updatedData,setUpdatedData}=useContext(MyStore)
  // console.log(updatedData);
  
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  }=useForm(
    {
      mode:"onchange",
      defaultValues:updatedData
    }
  )
 const formSubmit=(data)=>{
  if(updatedData){
    setProductData((prev)=>{
      return prev.map((val)=>{
        return val.id===updatedData.id?{...data}:val
      })
    })
    reset({
      name: "",
      chefName: "",
      price: "",
      preptime: "",
      url: "",
      description: ""
    })
    setUpdatedData(null)
    
  }else{
    setProductData([...productData,data])
    reset({
      name: "",
      chefName: "",
      price: "",
      preptime: "",
      url: "",
      description: ""
    })
  }
  reset()
 }
  useEffect(()=>{
    if(updatedData){
      reset(updatedData)
    }
  },[updatedData])
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col p-2'>
        <h1 className='text-2xl'>Add New Recipe</h1>
        <h3>Share your delicious recipe with everyone</h3>
      </div>
      <div className='p-2'>
        <form 
        onSubmit={handleSubmit(formSubmit)}
        className='flex flex-col p-2'>
          <div className='flex flex-col gap-2'>
          <p className='ml-2'>Recipe Name</p>
          <input 
           {...register("name",{
            required:"Name is required"
        })}
          type='text'
          className='w-80 h-10 rounded-xl bg-cyan-700 p-2' 
          placeholder='Recipe Name'/>
          {errors.name && (
        <p className="text-red-500">
          {errors.name.message}
        </p>
      )}
          </div>
          <div className='flex flex-col gap-2 mt-2'>
          <p className='ml-2'>Chef Name</p>
          <input 
          {
            ...register('chefName',{
              required:'Chef Name is required'
            })
          }
          type='text' className='w-80 h-10 rounded-xl p-2 bg-cyan-700' placeholder='Chef Name'/>
         {errors.name && (
        <p className="text-red-500">
          {errors.chefName.message}
        </p>
      )}
          </div>
          <div className='flex mt-6 gap-6'>
            <div className='flex flex-col'>
            <p className='ml-2'>Price</p>
            <input 
            {
              ...register('price',{
                required:'price is required'
              })
            }
            type="number" 
            placeholder='Price' 
            className='p-2 w-40 h-10 mt-1.5 rounded-xl bg-amber-500' />
            {errors.name && (
        <p className="text-red-500">
          {errors.price.message}
        </p>
      )}
            </div>
            <div>
              <p className='ml-2'>Prep Time</p>
            <input 
            {...register('preptime',{
              required:'Prep time required'
            })}
            type="number" 
            className='w-40 h-10 mt-1.5 rounded-xl bg-amber-500' />
            {errors.name && (
        <p className="text-red-500">
          {errors.preptime.message}
        </p>
      )}
            </div>
          </div>
          <div className='flex flex-col mt-4 gap-2'>
          <p className='ml-2'>Image url</p>
          <input 
          {...register('url',{
            required:'url is required'
          })}
          type='url' 
          placeholder='Paste image url' 
          className='p-2 w-80 h-10 rounded-xl bg-cyan-700'/>
          {errors.name && (
        <p className="text-red-500">
          {errors.url.message}
        </p>
      )}
          </div>
           <div className='flex flex-col mt-4 gap-2'>
          <p className='ml-2'>Description</p>
          <textarea 
          {...register('description',{
            required:'description is required'
          })}
          type='url' 
          placeholder='Description' 
          className=' p-2 w-80 h-40 rounded-xl bg-cyan-700 flex justify-start items-start'/>
         {errors.name && (
        <p className="text-red-500">
          {errors.description.message}
        </p>
      )}
          </div>
          <button className='rounded-xl mt-4 h-10 bg-orange-300'>Create Recipe</button>
        </form>
      </div>
    </div>
  )
}

export default Form