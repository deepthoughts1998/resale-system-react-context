import React from 'react'
import {Card,Button} from "react-bootstrap"
import { useCheckout } from '../context/CheckoutContext'

function Products({data}) {
    const {addItem}=useCheckout()

    function handleAddItem(){
        addItem(data)
        console.log("add success")
    }
  return (
    <>
    
    <Card className="m-2">
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          LKR {data.price}
        </Card.Text>
        <Button variant="primary" onClick={handleAddItem} disabled={!data.status}>{data.status? "Add to cart":"Sold"}</Button>
      </Card.Body>
    </Card>
        
        
    </>
  )
}

export default Products