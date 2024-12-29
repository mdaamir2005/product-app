import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router';


const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
     
      setProducts(response.data.products)
    }).catch((error) => {
      console.log(error)

    })


  }, [])





  

  return (
    <div>
      <div style={{display:'flex' ,flexWrap:'wrap',gap:"10px",padding:"10px 0px 10px 50px"}}>
        {products.map((ele, index) => {

          console.log(ele.title)
          return (
            <Link to={`/detail/${ele?.id}`}key={index}>
            <Card style={{ width: '18rem',padding:"10px" }} >
                <Card.Title>{ele?.id}: {ele?.title}</Card.Title>
              <Card.Img variant="top" src={ele?.images[0]} />
              <Card.Body>
                <Card.Text>
                  {ele?.descriptions}
                </Card.Text>
              
              </Card.Body>
            </Card>
            </Link>
          )
       
          })}
      </div>
    </div>





  )
}

export default Home