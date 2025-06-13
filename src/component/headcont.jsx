import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../css/header.css'
// import '../component/menu'
import { Link } from "react-router-dom";
export default function Headcont() {
     const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
     console.log("Current User", user);
     var x=0;
    const handleClick = () => {
        x++;
        if(x>2){
            x=1;
        }
        if(x==1) {
           document.getElementById("prodinfo").style.visibility="visible";
        }
        else if(x==2) {
            document.getElementById("prodinfo").style.visibility="hidden";
        }
      };
      var y=0;
    const menubar = () => {
        y++;
        if(y>2){
            y=1;
        }
        if(y==1) {
           document.getElementById("prodinfo1").style.visibility="visible";
        }
        else if(y==2) {
            document.getElementById("prodinfo1").style.visibility="hidden";
        }
      };
      var z=0;
      const menubar3 = () => {
          z++;
          if(z>2){
              z=1;
          }
          if(z==1) {
             document.getElementById("prodinfo3").style.visibility="visible";
          }
          else if(z==2) {
              document.getElementById("prodinfo3").style.visibility="hidden";
          }
        };
    return (
        <div>
            <div className="mainhead">
                <div className="head1main">
                    <div className="head1">
                        <div className="brand"><Link to="/"><i className="fa-solid fa-basket-shopping"></i> Buy<span>Nest</span></Link></div>
                        <div className="search"><input type="text" placeholder='Search Products' /> <i className="fa-solid fa-magnifying-glass"></i></div>
                        <div className="wishlist">
                            <div className="acco">
                                <i className="fa-regular fa-user"></i>
                                <div className="accoinfo">
                                    {/* {isAuthenticated && <h1>Hello {user.name}</h1>} */}
                                    {
                                        isAuthenticated ? (<button onClick={(e) => logout()}>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>Login</button>)
                                    }
                                    
                                </div>
                            </div>
                            <div className="acco">
                                <i className="fa-regular fa-heart"></i>
                                <div className="accoinfo">
                                    <span>Wishlist</span>
                                    <h6>4-ITEMS</h6>
                                </div>
                            </div>
                            <div className="acco">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <div className="accoinfo">
                                    <span>Cart</span>
                                    <h6>3-ITEMS</h6>
                                </div>
                            </div>
                        </div>
                        {/* ----------toggle css start here--------------- */}
                        <div className="menubar">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars-staggered"></i></button>

                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 id="offcanvasRightLabel"><div className="brand"><i className="fa-solid fa-basket-shopping"></i> Buy<span>Nest</span></div></h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="togglepage">
                                        <Link to="/"><div className="webpage1"><i className="fa-solid fa-house"></i> Home</div></Link>
                                        <Link to="/about"><div className="webpage1"><i className="fa-solid fa-user"></i> About Us</div></Link>
                                        <Link to="/blog"><div className="webpage1"><i className="fa-solid fa-briefcase"></i> Blog</div></Link>
                                        <Link to="/catego"><div className="webpage1"><i className="fa-light fa-grid-2"></i> Categories</div></Link>
                                        <Link to="/contact"><div className="webpage1"><i className="fa-solid fa-envelope"></i> Contact</div></Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* ----------toggle css End here--------------- */}

                    </div>
                </div>


                <div className="head2">
                    <div className="categories"><Link to="/catego"><i className="fa-solid fa-border-all"></i> All Categories <i className="fa-solid fa-angle-down"></i></Link>
                        <div className="categdd">
                            <div className="minidropdown">
                                 <div className="dropcateg1">
                                    <div className="dairybakery"><i className="fa-light fa-cupcake"></i> Dairy & Bakery</div>
                                    <div className="dairybakery2" onClick={handleClick}><i className="fa-light fa-tomato"></i> Fruits & Vegetable</div>
                                    <div className="dairybakery2" onClick={menubar3}><i className="fa-light fa-popcorn"></i> Snack & Spice</div>
                                    <div className="dairybakery2"onClick={menubar}><i className="fa-light fa-martini-glass-citrus"></i> Juice & Drinks</div>
                                 </div>
                                 <div className="megamenus">
                                 <div className="dropcateginfo1">
                                    <div className="dairyinfo"><span>Dairy</span> 
                                        <h6>Cauliflower</h6>
                                        <h6>Bell Peppers</h6>
                                        <h6>Broccoli</h6>       
                                        <h6>Cabbage</h6>
                                        <h6>Tomato</h6>
                                    </div>
                                    <div className="dairyinfo"><span>Bakery</span> 
                                        <h6>Cake and Pastry</h6>
                                        <h6>Rusk Toast</h6>
                                        <h6>Bread & Buns</h6>
                                        <h6>Chocolate Brownie</h6>
                                        <h6>Cream Roll</h6>
                                    </div>
                                 </div>
                                 <div className="dropcateginfo" id='prodinfo'>
                                    <div className="dairyinfo"><span>Fruits</span> 
                                        <h6>Mango</h6>
                                        <h6>Blue Berry</h6>
                                        <h6>Banana</h6>       
                                        <h6>Orange</h6>
                                        <h6>Grapes</h6>
                                    </div>
                                    <div className="dairyinfo"><span>Vegetable</span> 
                                        <h6>Cauliflower</h6>
                                        <h6>Bell Peppers</h6>
                                        <h6>Broccoli</h6>
                                        <h6>Cabbage</h6>
                                        <h6>Tomato</h6>
                                    </div>
                                 </div>
                                 <div className="dropcateginfo3" id='prodinfo3'>
                                    <div className="dairyinfo"><span>Snacks</span> 
                                        <h6>French fries</h6>
                                        <h6>potato chips</h6>
                                        <h6>Biscuits & Cookies</h6>       
                                        <h6>Popcorn</h6>
                                        <h6>Rice Cakes</h6>
                                    </div>
                                    <div className="dairyinfo"><span>Spice</span> 
                                        <h6>Cinnamon Powder</h6>
                                        <h6>Cumin Powder</h6>
                                        <h6>Fenugreek Powder</h6>
                                        <h6>Pepper Powder</h6>
                                        <h6>Long Pepper</h6>
                                    </div>
                                 </div>
                                 <div className="dropcateginfo3" id='prodinfo1'>
                                    <div className="dairyinfo"><span>Juice</span> 
                                        <h6>Mango Juice</h6>
                                        <h6>Coconut Water</h6>
                                        <h6>Tetra Pack</h6>       
                                        <h6>Apple Juices</h6>
                                        <h6>Lychee Juice</h6>
                                    </div>
                                    <div className="dairyinfo"><span>Soft Drink</span> 
                                        <h6>Breizh Cola</h6>
                                        <h6>Green Cola</h6>
                                        <h6>Jolt Cola</h6>
                                        <h6>Mecca Cola</h6>
                                       
                                    </div>
                                 </div>
                                 </div>

                            </div>
                        </div>
                    </div>
                    <div className="headmenu">
                        <div className="home"><Link to="/">Home <i className="fa-solid fa-angle-down"></i></Link></div>
                        <div className="home"> <Link to="/about">About us <i className="fa-solid fa-angle-down"></i></Link></div>
                        <div className="home"> <Link to="/blog">Blog <i className="fa-solid fa-angle-down"></i></Link></div>
                        <div className="home"><Link to="/catego">Categories <i className="fa-solid fa-angle-down"></i></Link></div>
                        <div className="home"><Link to="/contact">Contact <i className="fa-solid fa-angle-down"></i></Link></div>

                    </div>
                    <div className="curtloc"><i className="fa-solid fa-location-dot"></i> New York <i className="fa-solid fa-angle-down"></i></div>
                </div>
            </div>
        </div>
    )
}