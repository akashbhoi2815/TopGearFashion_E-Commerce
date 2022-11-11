import React from 'react'
import "../css/Adress2.css"

const Adress2 = () => {
  return (
    <>
    <div>
        <nav class="header">
            <div class="logo"><a href="" class="myntraweb-sprite desktop-logo sprites-headerLogo"></a></div>
            <ol class="checkout-steps">
                <li class="">BAG</li>
                <li class="divider"></li>
                <li class="active ">ADDRESS</li>
                <li class="divider"></li>
                <li class="">PAYMENT</li>
            </ol>
            <div class="secureContainer">
                <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" class="secureIcon"
                    width="26" height="28" />
                <div class="secure">100% SECURE</div>
            </div>
        </nav>
    </div>
    <div class="block">
        <div class="left-block">
            <div id="select-delivery">
                <div>
                    <h3>Select Delivery Address</h3>
                </div>
                <div id="add-address" class="priceBlock-priceHeader">ADD NEW ADDRESS</div>
            </div>
            <p class="priceBlock-priceHeader">DEFAUL ADDRESS</p>
            <div class="addressStrip">
                <input type="radio" name="" id="radio" checked="checked"/>
                <div id="address-details">
                    <h4  id="name"></h4>
                    <p class="add-font" id=""><span id="add" class="test"></span>,<span id="loc"></span></p>
                    <p class="add-font"><span id="city"></span>,<span id="state"></span>- <span id="pin"></span> </p>
                    <p class="add-font" id="pmob">Mobile: <span id="mob"></span></p>
                    <div id="edit">
                        <div>REMOVE</div>
                        <div>EDIT</div>
                    </div>
                </div>
            </div>
            <div class="addressStrip">
                <h3 id="new">+ Add New Address</h3>
            </div>
        </div>
         {/* Right Block  */}
         <div class="right-block">
            <div class="priceBlock-container">
                <p class="priceBlock-priceHeader">PRICE DETAILS</p>
                <div class="priceBreakUp-orderSummary">
                   <div class="priceDetail-row">
                      <span>Total MRP</span>
                      <span class="priceDetail-value actual-price">-</span>
                   </div>
                   <div class="priceDetail-row">
                      <span>Discount on MRP</span>
                      <span class="priceDetail-value discount-price teal-1">-</span>
                   </div>
                   <div class="priceDetail-row">
                      <span>Coupon Discount</span>
                      <span class="priceDetail-value applyCoupon">-</span>
                   </div>
                   <div class="priceDetail-row">
                      <span>COVID-19 Donation</span>
                      <span class="priceDetail-value donation-price">-</span>
                   </div>
                   <div class="priceDetail-row">
                      <span>Convenience Fee <span class="KnowMore">Know More</span></span>
                      <span class="priceDetail-value convenience-price">-</span>
                   </div>
                </div>
             </div>
            <div class="total-container">
                <div class="priceDetail-row">
                    <span>Total Amount</span>
                    <span class="priceDetail-total">₹458</span>
                </div>
            </div>
            <div class="orderbtn-container">
                <button id="continue" class="order-btn">CONTINUE</button>
             </div>
        </div>
        </div>
    </>
  )
}

export default Adress2
