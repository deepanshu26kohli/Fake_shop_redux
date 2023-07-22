import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux'
import {setProducts} from "../Redux/Actions/productAction"
const ProductListing = () => {
  console.log("all")
   const products = useSelector((state)=> state)
   const dispatch = useDispatch()
   const fetchProducts = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log("error",err)
    })
    console.log(response.data)
    
    dispatch(setProducts(response.data))
   }
   useEffect(()=>{
    fetchProducts()
   },[])
  //  console.log("Products:",products)
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
