import React from 'react'
import styled from "styled-components"

const Adress = () => {
    return (
        <>
        <Container>
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
    </Container>
        </>
    )
}

export default Adress

const Container = styled.div`
@font-face {
    font-family: "Whitney";
    src: url("https://constant.myntassets.com/www/fonts/WhitneyHTF-Book.eot");
    src: url("https://constant.myntassets.com/www/fonts/WhitneyHTF-Book.eot?#iefix") format("embedded-opentype"),
       url("https://constant.myntassets.com/www/fonts/WhitneyHTF-Book.woff") format("woff"),
       url("https://constant.myntassets.com/www/fonts/WhitneyHTF-Book.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
 }
 
 * {
    font-family: "Whitney";
    padding: 0px;
    margin: 2px;
 }
 
 .container {
    margin: 20px;
    display: flex;
    justify-content: space-between;
 }
 
 // product Image CSS 
 .img-card {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    height: fit-content;
 }
 .img-card > div {
    width: 96%;
    overflow: hidden;
    cursor: pointer;
 }
 
 .pdimg {
    width: 100%;
    background-size: cover;
    transition: all 0.5s;
 }
 
 .img-card > div:hover .pdimg {
    transform: scale(1.1);
 }
 
  // Details Card CSS 
 .details-card {
    width: 37%;
 }
 
 .pdtitle {
    font-size: 24px;
    font-weight: 700;
    color: #282c3f;
 }
 
 .pdname {
    font-size: 20px;
    font-weight: 400;
 }
 
 .pdmorecolor {
    height: 80px;
 }
 
 .pdmorecolor > img {
    height: 100%;
    cursor: pointer;
 }
 
 .price-card {
    display: flex;
    align-items: center;
 }
 
 // Styles for Bag Page
 .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #f5f5f6;
    letter-spacing: 2px;
    font-weight: 600;
 }
 
 .header > .secureContainer,
 .logo {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
 }
 
 .header > .checkout-steps {
    width: 40%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-size: 12px;
 }
 
 .divider {
    border-top: 1px dashed #696b79;
    height: 4px;
    width: 30px;
    margin-top: 10px;
 }
 
 .active {
    color: #20bd99;
    border-bottom: 2px solid #20bd99;
 }
 
 .block {
    display: flex;
    max-width: 70%;
    margin: auto;
    justify-content: space-between;
 }
 
 .block > .left-block {
    width: 60%;
    padding-right: 15px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
 }
 
 .block > .right-block {
    width: 40%;
    margin-left: 50px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
 }
 
 .addressStrip {
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #eaeaec;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
 }
 
 #form {
    width: 100%;
    margin-right: 30px;
 }
 
 input {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #535665;
    outline: none;
 }
 
 #city-state {
    width: 100%;
    display: flex;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
 }
 
 #city-state > div {
    width: 40%;
    background-color: rgb(235, 234, 233);
    height: 40px;
 }
 
 #save-address-as {
    display: flex;
    width: 33%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
 }
 
 #save-address-as > div {
    border: 1px solid black;
    padding: 3px 10px;
    border-radius: 20px;
 }
 
 #default-add {
    width: auto;
    margin-top: 6px;
 }
 
 #checkbox {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
 }
 
 #submit {
    width: 106%;
    padding: 12px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ff3f6c;
    color: white;
 }
 
 .priceBlock-container {
    position: relative;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 15px;
 }
 
 .priceBlock-priceHeader {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 12px;
    color: #535766;
 }
 
 .priceBreakUp-orderSummary {
    font-size: 14px;
    color: #282c3f;
 }
 
 .priceDetail-row {
    display: flex;
    justify-content: space-between;
 }
 
 .priceDetail-value {
    font-weight: 500;
 }
 
 .total-container {
    font-weight: 600;
 }
 
 .KnowMore {
    color: #ff3f6c;
    font-weight: 600;
    cursor: pointer;
    width: fit-content;
    font-size: 14px;
    margin-top: 10px;
 }
 
 .select {
    width: 100%;
    height: 100%;
    background-color: #f5f5f6;
    border: 0;
 }
 @media only screen and (max-width: 1000px) {
    .block {
        max-width: 90%;
    }
     .block > .left-block {
        padding-top: 20px;
     }
     .block > .right-block {
        margin-left: 30px;
     }
  }
  @media only screen and (max-width: 700px) {
    .block {
        max-width: 95%;
     }
     .block > .left-block {
        width: 60%;
        padding-right: 15px;
        padding-top: 40px;
     }
     .block > .right-block {
        margin-left: 25px;
        padding-top: 15px;
     }
     #submit{
        margin-top: 0px;
     }
  }
  @media only screen and (max-width: 600px) {
    .block {
        max-width: 95%;
        display: flex;
        flex-direction: column;
     }
     .block > .left-block {
        width: 80%;
        margin: auto;
     }
     .block > .right-block {
        width: 90%;
        margin: auto;
     }
     .header > .secureContainer,.logo {
        width: 55%;
     }
    .header > .checkout-steps {
        width: 80%;
    }
  }
`