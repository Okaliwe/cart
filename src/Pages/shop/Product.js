import { useContext } from "react";
import { Context} from "../../Context/shopContext";
const Product = (props) => {
    
    const {id,productName,price,productImage}=props.item
    const {addTocart,card}=useContext(Context)
    const cartItems=card[id]
    return ( 
        <div className="products">
            <img src={productImage} alt='img'/>
            <div className="hold">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button onClick={()=>addTocart(id)} className="addcart">Add To Cart{cartItems>0&&<>({cartItems})</>}</button>
        </div>
     );
}
 
export default Product;