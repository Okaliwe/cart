import { createContext, useState } from "react";
import {Produc} from '../Listproduct';
export const Context=createContext(null)

const getDefaultcart=()=>{
    let cart={}
    for(let i=1; i<Produc.length+1;i++){
        cart[i]=0
    }
    return cart;
}

 export const ShopContext = (props) => {
    const [card,setCard]=useState(getDefaultcart())
    const getTotalAmout=()=>{
        let totalAmount=0
        for(const item in card){
            if(card[item]>0){
                let itemInfo=Produc.find((product)=>product.id===Number(item))
                totalAmount += card[item]*itemInfo.price
            }
        }
        return totalAmount;
    }
    const addTocart =(itemId)=>{
        setCard((prev)=>({...prev, [itemId]:prev[itemId]+1}))
       
    }
    const RemoveFromcart =(itemId)=>{
        setCard((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const updatecount=(newAmount,itemId)=>{
        setCard((prev)=>({...prev,[itemId]:newAmount}))
    }
    const ContextValue={addTocart, RemoveFromcart, card ,updatecount,getTotalAmout}
    console.log(card)
    return (
        <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
    )
}