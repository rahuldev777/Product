import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWhishlist } from '../../Redux/Slice/WhishListSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Slice/Cartslice'
import Banner from '../Components/Banner'



function Home() {
    const data = useFetch("https://dummyjson.com/products")
    console.log(data)
    const dispatch=useDispatch()
  return (
    <>  
    <Container> 
       <Banner/>
        <Row className='mt-5'>
      

{ data?.length>0?data.map((product,index)=>(
 <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '18rem' }} className='shadow rounded card'>
      <Card.Img variant="top" src={product.thumbnail} height={200}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         <p>{product.description.slice(0,50)}...</p>
         <p>$ {product.price}</p>
        </Card.Text>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-primary' onClick={()=>dispatch(addToWhishlist(product))}><i class="fa-solid fa-heart p-1"></i></button>
        <button className='btn btn-primary'  onClick={()=>dispatch(addToCart(product))} >  <i class="fa-solid fa-cart-shopping p-1"></i></button>
       </div>
      </Card.Body>
    </Card> 
     </Col>
)):<div className='text-danger'>no products</div>

}
       
    
   </Row>
    </Container>


    </>
  )
}

export default Home