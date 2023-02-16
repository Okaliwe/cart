import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import './navbar.css'
import { ShoppingCart } from "phosphor-react";
const Navbar = () => {
    const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset < 100 ){
          setScrolled(false);
        }
        else{
          setScrolled(true);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
     let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    return ( 
        <div className={navbarClasses.join(" ")}>
            <div className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;