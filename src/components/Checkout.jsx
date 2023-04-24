import React,{useState,useEffect} from 'react'
import { useCheckout } from '../context/CheckoutContext'
import {Table} from "react-bootstrap"

function Checkout() {
    
    const {showItems,totalPrice,removeItem}=useCheckout()
    const [items,setItems]=useState(showItems)
    const [total,setTotal]=useState(totalPrice)

    useEffect(()=>{
      setItems(showItems)
      setTotal(totalPrice)
    },[removeItem])

    const handleRemove=async (item)=>{
      await removeItem(item) 
      }
    
    
    
  return (
    <>
    <Table striped bordered hover>
      <tbody>
        {items && items.map((item)=>{
            return (<tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button onClick={(e)=>{handleRemove(item)}}>Remove</button></td>
          </tr>)
        })}
         </tbody>
    </Table>
    <h1>Total Price:{total}</h1>
    </>
  )
}

export default Checkout