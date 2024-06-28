import React from 'react';
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>

        <div className="descriptionbox-navigator">
            <div className="descrptionbox-nav-box">Description</div>
            <div className="descrptionbox-nav-box fade">Reviews (125)</div>
        </div>
        
        <div className="descriptionbox-description">
            <p>
               With its classic design and timeless appeal, this product is aversatile addition to your wardrobe. It is the perfect piece to elevate your style. </p>
            <p>
                Add a touch of style to your wardrobe! Designed to provide a comfortable fit and a sleek look. It's built to last and designed to impress.
            </p>

        </div>
    </div>
  )
}
