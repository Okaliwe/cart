import { Produc } from "../../Listproduct";
import { Context} from "../../Context/shopContext";
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import CartIT from "./CarIItem";
import './Cart.css';
const Cart = () => {
    const navigate=useNavigate()
    const {card,getTotalAmout}=useContext(Context)
    const totalAmount=getTotalAmout()
    return ( 
        <div className="cart">
            <h1>YOUR CART ITEMS</h1>
            <div className="CartItems">
                {Produc.map((item)=>
                {
                    if(card[item.id] !==0){
                        return <CartIT item={item}/>
                    }
                })}
            </div>
            {totalAmount>0?
             <div className="checkout">
             <p>Subtotal:${totalAmount}</p>
             <button onClick={()=>navigate('/')}>Continue shopping</button>
         </div>:
         <h1>YOUR CART IS EMPTY</h1>
        }
           
        </div>
     );
}
 
export default Cart;