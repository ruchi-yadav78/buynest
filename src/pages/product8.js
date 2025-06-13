import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item13 from '../media/product13.webp'
import { useState } from "react";
export default function Product8() {
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
                        <img src={item13} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Fresh Blueberries</h1>
                        <p className="category">Blueberries - 1 Pint Package</p>
                        <p className="price">$ 3.00<span className="old-price">$ 4.00</span></p>
                        <p className="description">
                        Blueberries - 1 Pint Package offers a fresh, juicy, and antioxidant-rich snack packed with natural sweetness. These nutrient-dense berries support heart health, brain function, and overall wellness. Perfect for smoothies, baking, or enjoying straight from the pack, they bring a burst of flavor to every bite.
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
