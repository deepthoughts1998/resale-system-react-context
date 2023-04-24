import React, { createContext, useContext,  useState } from 'react'


const CheckoutContext=createContext()



export function useCheckout(){
    return useContext(CheckoutContext)
}

function CheckoutProvider({children}) {

    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)


    

    async function addItem(product){
        product.status=false
        setCart([...cart,product])
        setTotal(prev=>prev + product.price)
        
    }

    function removeItem(product){
        product.status=true
        setCart(cart.filter((item) => item !== product))
        console.log(cart)
        setTotal(prev=>prev - product.price)
    }
    function showItems(){
        return cart
    }

    function totalPrice(){
        return total
    }
    const value={
        addItem,
        showItems,
        totalPrice,
        removeItem
    }
  return (
    <CheckoutContext.Provider value={value}>
        {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider