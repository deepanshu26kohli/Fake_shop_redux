import React, { useEffect } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../Redux/Actions/productAction'
const ProductDetail = () => {
  const product = useSelector((state)=> state.product)
  const { productId} = useParams()
  const dispatch = useDispatch()
  console.log(product)
  const fetchProductDetail= async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((e)=>{
     console.log("err",e)
    })
    dispatch(selectedProduct(response.data))
  }
  useEffect(()=>{
    if(productId && productId !== ""){
      fetchProductDetail()
    }
  },[productId])
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}










export default ProductDetail
