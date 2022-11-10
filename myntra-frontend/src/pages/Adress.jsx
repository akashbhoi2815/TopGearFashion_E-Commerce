import React from 'react'
import "../css/Adress.css"

const Adress = () => {
    return (
        <>
            <div class="">
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
                    <div class="addressStrip">
                        <form action="" id="form">
                            <h5 class="">CONTACT DETAILS</h5>
                            <input type="text" name="" id="name" placeholder="Name*" />
                            <input type="number" name="" id="mobile" placeholder="Mobile No*" />
                            <h5 class="">ADDRESS</h5>
                            <input type="number" name="" id="pin" placeholder="Pin Code*" />
                            <div id="pin-alert">
                                pin code madatory alert 
                            </div>
                            <input type="text" name="" id="address" placeholder="Address(House No, Building,Street, Area)*" />
                            <input type="text" name="" id="locality" placeholder="Locality/Town" />
                            <div id="city-state">
                                    <div>
                                    <select name="" id="state" class="select">
                                        <option value="SelectState">Select State</option>
                                        <option value="Andra Pradesh">Andra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madya Pradesh">Madya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttaranchal">Uttaranchal</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadeep">Lakshadeep</option>
                                        <option value="Pondicherry">Pondicherry</option>
                                    </select>
                                    </div>
                                <div>
                                    <select name="" id="city" class="select">
                                        <option value="">City/Town</option>
                                    </select>
                                </div>
                            </div>
                            <h5 class="">SAVE ADDRESS AS</h5>
                            <div id="save-address-as">
                                <div>Home</div>
                                <div>Work</div>
                            </div>
                            <div id="checkbox">
                                <input type="checkbox" name="" id="default-add" />
                                <label for=""> Make this my defaul address</label>
                            </div>
                            <button id="submit">ADD ADDRESS</button>
                        </form>
                    </div>
                </div>
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
      </div>
    </div>
        </>
    )
}

export default Adress

