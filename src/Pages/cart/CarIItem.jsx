import { Context} from "../../Context/shopContext";
import { useContext } from "react";
const CartIT = (props) => {
    const {id,productName,price,productImage}=props.item
    const {addTocart,card,RemoveFromcart,updatecount}=useContext(Context)
    
    
    return ( 
        <div className="CartItem">
            <img src={productImage} alt='img'/>
            <div className="hold">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={()=>RemoveFromcart(id)}> - </button>
                    <input value={card[id]} onChange={(e)=>updatecount(Number(e.target.value),id)}/>
                    <button onClick={()=>addTocart(id)}> + </button>
                </div>
            </div>
        </div>
     );
}
 
export default CartIT;