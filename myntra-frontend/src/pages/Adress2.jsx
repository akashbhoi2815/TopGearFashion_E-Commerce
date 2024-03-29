import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getMenData } from '../redux/appReducer/action';
import styled from "styled-components"

const Adress2 = (prop) => {
   const { id } = useParams();
   const mendata = useSelector((store) => store.appReducer.mensdata);
   const [currentData, setCurrentData] = useState({})
   const dispatch = useDispatch()
   useEffect(() => {
      if (mendata.length === 0) {
         dispatch(getMenData)
      }
   }, [dispatch, mendata.length])


 useEffect(() => {
   if(mendata.length === 0){
      dispatch(getMenData())
   }
 }, [dispatch,mendata.length])

   useEffect(() => {
      if (id) {
         const current = mendata.find((e) => e.Idno == +id);
         current && setCurrentData(current)
      }
   }, [id, mendata])
   // For Accessing from Localstorage 

   const [data, setData] = useState({})
   useEffect(() => {
      const items = JSON.parse(localStorage.getItem("dataKey"));
      if (items) {
         setData(items)
      }
   }, []);
   return (
      <>
         <Container>
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
                     <input type="radio" name="" id="radio" checked="checked" />
                     <div id="address-details">
                        <h4 id="name">Name:-{data.name}</h4>
                        <p class="add-font" id=""><span id="add" class="test">Adress:-{data.adress}</span>,<span id="loc"></span></p>
                        <p class="add-font"><span id="city"></span>,<span id="state">State:-{data.state}</span>- <span id="pin">Pin:-{data.pincode}</span> </p>
                        <p class="add-font" id="pmob"><span id="mob">Mobile:-{data.number}</span></p>
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
                           <span class="priceDetail-value actual-price">₹{currentData?.price}</span>
                        </div>
                        <div class="priceDetail-row">
                           <span>Discount on MRP</span>
                           <span class="priceDetail-value discount-price teal-1">₹{(+currentData?.price) - (+currentData?.off_price)}</span>
                        </div>
                        <div class="priceDetail-row">
                           <span>Coupon Discount</span>
                           <span class="priceDetail-value applyCoupon">0</span>
                        </div>
                        <div class="priceDetail-row">
                           <span>COVID-19 Donation</span>
                           <span class="priceDetail-value donation-price">₹10</span>
                        </div>
                        <div class="priceDetail-row">
                           <span>Convenience Fee <span class="KnowMore">Know More</span></span>
                           <span class="priceDetail-value convenience-price">₹99</span>
                        </div>
                     </div>
                  </div>
                  <div class="total-container">
                     <div class="priceDetail-row">
                        <span>Total Amount</span>
                        <span class="priceDetail-total">₹{+currentData?.price + 99 + 10}</span>
                     </div>
                  </div>
                  <div class="orderbtn-container">

                     <Link to={`/menpage/payment/${currentData?.Idno}`}><button id="continue" class="order-btn">CONTINUE</button></Link>
                  </div>
               </div>
            </div>
         </Container>
      </>
   )
}

export default Adress2

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
 /* Rating Desing */
 .rating-card {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid gainsboro;
    width: fit-content;
    padding: 0px 10px;
    font-size: 14px;
    margin: 15px 0px;
 }
 
 .sizebtn {
    background-color: #fff;
    color: #282c3f;
    border: 1px solid #bfc0c6;
    border-radius: 50px;
    min-width: 40px;
    height: 40px;
    text-align: center;
    cursor: pointer;
 }
 
 .sizebtn:hover {
    border: 1px solid #ff3f6c;
 }
 
 .sizebtn-selected {
    border: 1px solid #ff3f6c;
    background-color: #fff;
    color: #ff3f6c !important;
    font-weight: 700;
 }
 
 .btn-card {
    margin-top: 15px;
    display: flex;
    gap: 15px;
    height: 45px;
 }
 
 .addtobag {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff3f6c;
    border: none;
    border-radius: 2px;
    width: 45%;
    color: white;
    cursor: pointer;
 }
 .addtobag:hover {
    background-color: #ff527b;
 }
 
 .addtowishlist {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 2px;
    width: 35%;
    cursor: pointer;
 }
 
 .pin {
    border: 1px solid #d4d5d9;
    width: fit-content;
    border-radius: 5px;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
 }
 .pin > input {
    border: none;
    height: 30px;
    width: 7em;
 }
 
 .pin > input:focus {
    outline: none;
 }
 
 #checkPin {
    color: #ff3f6c;
    cursor: pointer;
 }
 .offer-card {
    margin-top: 10px;
 }
 .offer-card > ul > li {
    margin-left: 4%;
    font-size: 12px;
 }
 
 /* Styles for Bag Page */
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
    max-width: 80%;
    margin: auto;
    justify-content: space-between;
    margin-right: 100px;
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
    margin-left: 100px;
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
    width: 106%;
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
 
 #save-address-as > div:first-child {
    color: #ff3f6c;
    border: 1px solid #ff3f6c;
    font-weight: bold;
    font-size: 14px;
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
 
 // Right Block styling 
 
 .block > .right-block {
    width: 45%;
    padding-left: 15px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
 }
 
 .donationStrip-container {
    position: relative;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 15px;
 }
 .donationStrip-Header {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 12px;
    color: #535766;
 }
 .donationStrip-icon {
    fill: #ff3f6c;
 }
 .donationStrip-title > span {
    font-weight: 600;
    font-size: 12px;
    margin-left: 5%;
 }
 
 .donationStrip-pill {
    display: flex;
    gap: 10px;
    margin-top: 15px;
 }
 .pillView-pill {
    cursor: pointer;
    border-radius: 40px;
    height: fit-content;
    border: 1px solid #d4d5d9;
    color: #282c3f;
    font-weight: 700;
    font-size: 14px;
    padding: 4px 10px;
 }
 .donationStrip-input {
    width: 35px;
    border: none;
    outline: none;
    font-weight: 700;
 }
 // .donationStrip-

 .coupons-container {
    position: relative;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 15px;
 }
 .coupons-header {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 12px;
    color: #535766;
 }
 .coupons-content {
    font-weight: 600;
    font-size: 12px;
 }
 .coupons-label {
    margin-left: 5%;
    letter-spacing: 2px;
    text-transform: uppercase;
 }
 .coupons-apply {
    position: absolute;
    bottom: 15px;
    right: 5px;
 }
 .giftWrap-container {
    position: relative;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 15px;
 }
 .giftWrap-header {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 12px;
    color: #535766;
 }
 .giftWrap-content {
    background: #fff1ec;
    font-size: 12px;
    border-radius: 4px;
    display: flex;
    gap: 20px;
    padding: 10px;
 }
 
 .order-btn {
    width: 100%;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 2px;
    border: none;
    padding: 10px 16px;
    background-color: rgb(255, 63, 108);
    color: rgb(255, 255, 255);
    cursor: pointer;
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
 
 // Model CSS 
 .modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(68, 67, 67, 0.6);
    z-index: 3;
 }
 .dialogs-Container {
    position: relative;
    width: 300px;
    top: 30%;
    margin: auto;
    padding: 0 16px;
    background-color: white;
    padding: 15px;
 }
 .modal-cancelIcon {
    position: absolute;
    right: 15px;
 }
 .dialogs-header {
    padding: 6px 0 18px 8px;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 1px solid #f5f5f6;
 }
 .dialogs-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 2px;
    padding: 15px 10px;
 }
 .dialogs-qtyitem {
    cursor: pointer;
    font-size: 16px;
    padding: 8px 14px;
    border: 1px solid #535766;
    border-radius: 50px;
    margin-right: 12px;
    font-weight: 600;
 }
 .dialogs-sizeitem {
    cursor: pointer;
    font-size: 16px;
    padding: 8px 14px;
    border: 1px solid #535766;
    border-radius: 50px;
    margin-right: 12px;
    font-weight: 600;
 }
 
 .knowMore-list {
    background: #f4f4f5;
    padding: 12px;
    font-weight: 300;
    padding-left: 20px;
 }
 
 .knowMore-text {
    font-size: 12px;
    margin-bottom: 8px;
 }
 
 .coupons-textInput {
    box-sizing: border-box;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 4px;
    outline: none;
    width: 100%;
    font-size: 20px;
    border: none;
    border: 1px solid #d5d6d9;
    padding: 7px 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
 }
 .donationStrip-Header {
 }
 .bagfootercontainer {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    position: relative;
    bottom: 15px;
 }
 .bagfooter-images {
    width: 80%;
 }
 .bagfooter-images > img {
    width: 6%;
 }
 .bagfooter-help {
    width: 15%;
    font-size: 14px;
    font-weight: 500;
 }
 // Quick Styling CSS 
 .btn-111 {
    font-size: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 4px 16px;
    font-weight: 600;
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    color: rgb(255, 63, 108);
    border: 1px solid #ff527b;
    cursor: pointer;
 }
 #radio {
    margin-top: 5px;
    accent-color: red;
    width: 15px;
    height: 15px;
 }
 
 #select-delivery {
    display: flex;
    width: 100%;
    justify-content: space-between;
 }
 
 #add-address {
    border: 1px solid #535665;
    padding: 10px;
 }
 
 #edit {
    display: flex;
    width: 40%;
    justify-content: space-between;
 }
 
 #edit > div {
    border: 1px solid #535665;
    font-size: 13px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
 }
 
 #address-details {
    width: 100%;
    margin-top: 0px;
 }
 
 #pmob {
    margin: 20px 0px;
 }
 
 #add {
    margin: 5px 0px;
 }
 
 #new {
    color: #ff3f6c;
 }
 
 .order-btn {
    width: 100%;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 2px;
    border: none;
    padding: 10px 16px;
    background-color: rgb(255, 63, 108);
    color: rgb(255, 255, 255);
    cursor: pointer;
 }
 
 #mob {
    font-size: 14px;
    font-weight: bold;
 }
 
 .add-font {
    color: #424556;
    font-size: 13px;
    margin-top: 3px;
 }
 h4 {
    margin-bottom: 10px;
 }
 
`