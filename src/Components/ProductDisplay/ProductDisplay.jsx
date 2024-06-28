import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import {ShopContext} from "../../Context/ShopContext"

export default function ProductDisplay(props) 
{
    
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);


    const handleSizeClick = (size) => {
        setSelectedSize(size);

    };

  return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} className="productdisplay-main-img" alt="" />

                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(112)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                </div>
                
                <div className="productdisplay-right-description">
                   Style meets functionality in this versatile product. High-quality material and thoughtful design. 
                </div>
                
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">

                    {['Small', 'Medium', 'Large', 'XL', 'XXL'].map((size) => (
                        <div key={size}
                        className={`productdisplay-size-option ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                        </div>
                         ))}
                        <div>Medium</div>
                        <div>Large</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    
                    <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>

                </div>
                    <p className='productdisplay-right-category'>
                        <span>Category : </span>
                        Women, Men, T-Shirt, Crop top
                    </p>
                    
                    <p className='productdisplay-right-category'>
                        <span>Tags : </span>
                        Mordern Latest, High-quality
                    </p>
                    

                

                

            </div>
        </div>
  )
}
