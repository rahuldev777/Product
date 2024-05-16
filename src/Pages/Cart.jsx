import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removefromCart } from '../../Redux/Slice/Cartslice';

function Cart() {
  const navigate=useNavigate()

  const dispatch=useDispatch()
  const CartArray=useSelector((state=>state.CartReducer));
 
  const[total,setTotal]=useState(0)

  const getCartTotal=()=>{

    if(CartArray.length>0){
      setTotal(CartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    
      
  }else{
setTotal(0)
}
  }

  useEffect(()=>{
getCartTotal()
  },[CartArray])

  const removeCart=()=>{
    dispatch(emptyCart())
    alert("empty cart succes fully")
    navigate("/")
  }

  return (
    <div style={{marginTop:"50px"}}>
      <Container>
 <Row>
  {
  CartArray.length>0?

  <div className='row'>
    <div className='col-lg-8'>
      <table className='table shadow rounded'>
        <thead> 
        <tr>
            <th>#</th>
            <th>product id</th>
            <th>product img</th>
            <th>product price</th>
            <th></th>
          </tr>

        </thead>
          <tbody>
            {
              CartArray.map((product,index)=>(
                 <tr key={index}>
            <th>{index+1}</th>
            <th>{product.title}</th>
            <th><img src={product.thumbnail} alt="" width={"200px"} height={"200px"} srcset="" /></th>
            <th>{product.price}</th>
            <th><button className='btn btn-primary' onClick={()=>dispatch(removefromCart(product.id))} ><i class="fa-solid fa-trash"></i></button></th>
          </tr>
              ))
            }
          </tbody>
         
       
        <tbody>

        </tbody>
      </table>

    </div>
    <div className='col-lg-3'>
      <div className='border mt-3 rounded p-2 w-100'>
        <h1 className='text-primary p-2'>Cart Summary</h1>
        <h4>Total Products:<span className='fs-2 text-success'>{CartArray.length}</span></h4>
        <h5>Total::<span className='text-danger fw-bolder fs-2'>${total}</span>
        </h5>
        <div className='d-grid'>
          <button className='btn btn-success mt-5 rounded' onClick={removeCart}>Check Out</button> 
        </div>
      </div>
    </div>

  </div>
  :<div style={{height:"70vh"}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
            
  <img height={"500px"} width={"500px"} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />

  <h3 className='text-center text-danger'>Whislist is empty</h3>

  <Link to={"/"} style={{textDecoration:"none"}}><button className='btn btn-primary rounded'>back to home</button></Link>

</div>

  }

 </Row>

      </Container>


    </div>
  )
}

export default Cart