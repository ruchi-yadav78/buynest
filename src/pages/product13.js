import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item18 from '../media/product18.jpg'
import { useState } from "react";
export default function Product13() {
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <div>
            <Headcont />
            <div className="itemsbody">
                <div className="product-card">
                    <div className="product-image">
                        <img src={item18} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Milk</h1>
                        <p className="category">Fairlife Lactose-Free 2% Milk</p>
                        <p className="price">$ 3.00<span className="old-price">$ 4.00</span></p>
                        <p className="description">
                        Fairlife Lactose-Free 2% Milk provides rich, creamy dairy goodness without the discomfort of lactose. Ultra-filtered for higher protein and calcium, it’s a nutritious choice for a balanced diet. Smooth and delicious, it’s perfect for drinking, cooking, or adding to your favorite recipes.
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

                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
