import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item7 from '../media/product7.jpg'
import { useState } from "react";

export default function Product2() {
    const [quantity, setQuantity] = useState(1);
    
        const changeQuantity = (amount) => {
            setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
        };
    
  return (
    <div>
     <Headcont />
                <div class="itemsbody">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={item7} alt="Product Image" />
                        </div>
                        <div class="product-info">
                            <h1>Foods</h1>
                            <p class="category">Stick Fiber Masala Magic</p>
                            <p class="price">$ 45.00 <span class="old-price">$ 50.00</span></p>
                            <p class="description">
                            Stick Fiber Masala Magic is a flavorful and healthy snack that combines the goodness of dietary fiber with a burst of spicy Indian masala. These crunchy sticks are made from natural ingredients and are perfect for those looking for a tasty yet guilt-free treat. Packed with fiber, they support digestion and help keep you feeling full longer. The unique blend of spices adds a delicious zing, making it a favorite among both kids and adults. Stick Fiber Masala Magic is the perfect choice.
                            </p>
                            <div className="quantity-container">
                                <button className="quantity-btn" onClick={() => changeQuantity(-1)}>-</button>
                                <input
                                    type="number"
                                    className="quantity-input"
                                    value={quantity}
                                    readOnly
                                />
                                <button className="quantity-btn" onClick={() => changeQuantity(1)}>+</button>
                            </div>
    
                            <button class="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <Footer />
    </div>
  )
}
