import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import Rating from '@mui/material/Rating';

const ProductDetails = () => {
const {id}= useParams()
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      console.log(response.data)
      setProductDetails(response?.data)
    }).catch((error) => {
      console.log(error)

    })


  }, [])




  return (
    <div>
      
      <div style={{display:'flex'}}>
        <div>
<div style={{width:'40%'}}>
  
  <img src={productDetails?.images} alt="" style={{height:"500px",width:'500px'}}/>
  </div>
<div style={{border:'1px solid black'}}>
  <h3 >{productDetails?.title} - {productDetails.weight} GM</h3>
<Rating name="half-rating-read" defaultValue={productDetails.rating} precision={0.5} readOnly />
  
<div>{productDetails.price}$</div>
<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Brand :</span>{productDetails.brand}</p>
<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Category :</span>  {productDetails.category}</p>
<p> {productDetails?.description}</p> 
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Stocks :</span>   {productDetails?.stock}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Shipping Time :</span>  {productDetails.shippingInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Warranty :</span>  {productDetails.warrantyInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Return Days :</span>  {productDetails.returnPolicy}</p>
<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer'}}>Add To Cart - {productDetails.price}$ </div>
<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer', backgroundColor:'gold'}}>Buy It Now</div>
</div>



</div>

</div>







</div>
    
  )
}

export default ProductDetails