import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item16 from '../media/product16.jpg'
import { useState } from "react";
export default function Product11() {
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
                        <img src={item16} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Soda</h1>
                        <p className="category">Coca-Cola - 2 L Bottle</p>
                        <p className="price">$ 3.00<span className="old-price">$ 4.00</span></p>
                        <p className="description">
                        Coca-Cola - 2L Bottle delivers the classic, refreshing taste of the world’s favorite soda in a family-sized pack. With its signature fizz and perfect balance of sweetness, it’s ideal for sharing at gatherings or enjoying with meals. Serve it chilled for a crisp, satisfying experience every time.
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
