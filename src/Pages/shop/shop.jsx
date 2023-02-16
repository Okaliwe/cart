
import { Produc } from '../../Listproduct';
import './Shop.css'
import Product from "./Product";
const Shop = () => {
    return ( 
        <div className="shop">
            <div className="title">
                <h1>FAVOURS SHOP</h1>
            </div>
            <div className="product">
               {Produc.map((item)=>(
                <Product item={item}/>
               ))} 
            </div>
        </div>
     );
}
 
export default Shop;