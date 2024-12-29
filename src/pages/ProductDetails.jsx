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
      <h1>{productDetails?.brand}</h1>
      <div style={{display:'flex',justifyContent:'space-between'}}>
<div style={{width:'40%'}}>
  <img src={productDetails?.images} alt="" style={{height:"500px",width:'500px'}}/>
  <h3 >Product Name: </h3>
  <div>{productDetails?.title}</div>
<h3 >Description: </h3>
<div>{productDetails?.description}</div>



</div>

<div style={{width:'40%'}}>
<h2>Price</h2>
<div>{productDetails?.price}</div>
<h2>Available</h2>
<div>{productDetails?.availabilityStatus}</div>
<h2>Category</h2>
<div>{productDetails?.category}</div>
<h2>Rating</h2>
<div>{productDetails?.rating}</div>
<h2>Stock</h2>
<div>{productDetails?.stock}</div>
<h2>warranty</h2>
<div>{productDetails?.warrantyInformation}</div>
<h2>Weight</h2>
<div>{productDetails?.weight}</div>
</div>

</div>
<div>
<h2>Reviews</h2>


{productDetails?.reviews?.map((ele ,index)=>{
return(
<div key={index}>
  <div>
<p>{ele?.comment}</p>
<Rating name="half-rating-read" defaultValue={ele.rating} precision={0.5} readOnly />

</div>

</div>

)




})}


</div>
    </div>
  )
}

export default ProductDetails