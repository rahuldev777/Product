import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../../Redux/Slice/WhishListSlice'
import { addToCart } from '../../Redux/Slice/Cartslice'



function Wishlist() {

  const whislistArray=useSelector((state=>state.whishlistReducer));
  const dispatch=useDispatch()

  const handlleWishlistCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }
  
  return (
    <>
    <div style={{marginTop:"50px"}}>
      <Container>

     
       <Row className='mt-5'>
        {
          whislistArray.length>0?whislistArray.map((product,index)=>(
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
                <button className='btn btn-primary' onClick={()=>dispatch(removeFromWishlist(product.id))} ><i class="fa-solid fa-trash"></i></button>
                <button className='btn btn-primary' onClick={()=>dispatch(handlleWishlistCart(product))}><i class="fa-solid fa-cart-shopping p-1"></i></button>
               </div>
              </Card.Body>
            </Card> 
             </Col>

          )):<div style={{height:"70vh"}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
            
            <img height={"500px"} width={"500px"} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />

            <h3 className='text-center text-danger'>Whislist is empty</h3>

            <Link to={"/"} style={{textDecoration:"none"}}><button className='btn btn-primary rounded'>back to home</button></Link>

          </div>
        }

    </Row> 
    </Container>
    </div>
   
    </>
  )
}

export default Wishlist