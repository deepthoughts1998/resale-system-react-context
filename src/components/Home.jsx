import React from 'react'
import {ProductList} from "../ProductList"
import Products from "./Products"
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
    <Container className="w-50 h-50">

    {ProductList.map((product)=>{
        return <Products key={product.id} data={product} />
    })}
    </Container>
    
    
    </>
  )
}

export default Home