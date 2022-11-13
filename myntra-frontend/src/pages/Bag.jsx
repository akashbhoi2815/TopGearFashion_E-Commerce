import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getMenData } from '../redux/appReducer/action';
import styled from "styled-components"

const Bag = () => {
      const { id } = useParams();
      const mendata = useSelector((store)=>store.appReducer.mensdata);
      const [currentData, setCurrentData] = useState({})
      const dispatch = useDispatch()
    console.log('mendata: ',id, mendata);

    useEffect(() => {
      if(mendata.length === 0){
        dispatch(getMenData)
      }
    }, [dispatch,mendata.length])

    useEffect(() => {
      if(id){
        const current = mendata.find((e)=> e.Idno ==+id) ;
        
        current && setCurrentData(current)
      }
    }, [id,mendata])
    console.log('currentData: ', currentData);
  return (
    <>
    <Container>
      <div class="navbar">
         <nav class="navbar-header">
            <div class="navbar-logo"><a href="" class="myntraweb-sprite desktop-logo sprites-headerLogo"></a></div>
            <ol class="navbar-checkout-steps">
               <li class="active">BAG</li>
               <li class="divider"></li>
               <li class="">ADDRESS</li>
               <li class="divider"></li>
               <li class="">PAYMENT</li>
            </ol>
            <div class="navbar-secureContainer">
               <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" class="secureIcon" width="26" height="28" />
               <div class="secure">100% SECURE</div>
            </div>
         </nav>
      </div>
      <div class="block">
         <div class="left-block">
            <div class="addressStrip">
               <div class="addressStrip-title fs-12">Deliver to:<strong class=""> 401209</strong></div>
               <button class="addressStrip-change">CHANGE ADDRESS</button>
            </div>
            <div class="offerStrip">
               <h5 class="flex offer-title"><span class="myntraweb-sprite sprites-OfferIcon"></span> Available Offers</h5>
               <ul class="offer-items">
                  <li>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500. TCA</li>
                  {/* <div class="offer-hide">
                     <li>10% Instant Discount on Axis Bank Credit and Debit Cards on a min spend of Rs 3,000. TCA</li>
                     <li>Flat Rs 150 Cashback on Paytm Wallet and Postpaid transaction on a min spend of Rs 1,500. TCA</li>
                     <li>15% Cashback upto Rs 750 On ZestMoney Transactions. TCA</li>
                     <li>10% Instant Discount + 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                     <li>10% Cashback upto Rs 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000. TCA</li>
                     <li>Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik.TCA</li>
                     <li>Please enable Online transactions on your ICICI and Axis Bank Cards for a seamless shopping experience</li>
                  </div> */}
                  <a class="more-text flex">Show More <span class="myntraweb-sprite sprites-expandIcon "></span></a>
               </ul>
            </div>
            <div class="itemContainer">
               <div class="itemContainer-item">
                  <div class="itemContainer-itemLeft">
                      {/* <div class="itemContainer-tickIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="itemComponents-activeProduct">
                           <path
                              fill-rule="evenodd"
                              d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
                           ></path>
                        </svg>
                     </div>  */}

                     <img
                        src={currentData?.images?.image1}
                        // src="https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12816878/2020/12/8/992feaf9-6ccf-4880-8076-100237f3c1c91607426778122-HERENOW-Men-Tshirts-2751607426776423-1.jpg"
                        alt=""
                     />
                  </div>
                  <div class="itemContainer-itemRight">
                     <h5 class="itemContainer-brand">{currentData?.brand}</h5>
                     <p class="itemContainer-title">{currentData?.title}</p>
                     <p class="itemContainer-soldby">Sold By: Omnitech Retail</p>
                     <div class="sizeQtyContainer">
                        <div class="item-size">Size: M</div>
                        <div class="item-qty">Qty: 1</div>
                     </div>
                     <div class="itemPriceContainer">
                        <h5 class="item-price">₹ {currentData?.price}</h5>
                        <h5 class="og-price"> ₹ {currentData?.off_price}</h5>
                        <h5 class="orange-1"> {currentData?.discount} OFF</h5>
                     </div>
                     <div class="deliveryContainer">
                        <span class="myntraweb-sprite sprites-greenTickIcon"></span>
                        <span>Delivery By</span>
                        <strong>15 Nov 2022</strong>
                     </div>
                  </div>
                  <div class="itemContainer-closeIcon">
                     <svg  width="16" height="16" class="item-closeIcon">
                        <path
                           d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                        ></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
         <div class="right-block">
            <div class="coupons-container">
               <p class="coupons-header">COUPONS</p>
               <div class="coupons-content flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="coupons-couponIcon">
                     <g fill="none" fill-rule="evenodd" transform="rotate(45 6.086 5.293)">
                        <path
                           stroke="#000"
                           d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"
                        ></path>
                     </g>
                  </svg>
                  <span class="coupons-label">Apply Coupon</span>
               </div>
               <button class="btn-111 coupons-apply">APPLY</button>
            </div>
            <div class="giftWrap-container">
               <p class="giftWrap-header">GIFTING &amp; PERSONALISATION</p>
               <div class="giftWrap-content">
                  {/* <div class="giftWrap-giftIcon" style="background: none; height: 80px; width: 39px">
                     <picture class="image-imgResponsive" style="width: 100%">
                        <source srcset="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" type="image/webp" />
                        <img
                           src="https://constant.myntassets.com/checkout/assets/img/gift-big.png"
                           class="image-imgResponsive"
                           alt="image"
                           style="width: 100%"
                        />
                     </picture>
                  </div> */}
                  <div>
                     <h3 class="giftWrap-title">Buying for a loved one?</h3>
                     <div>Gift wrap and personalised message on card, Only for ₹25</div>
                     <button class="btn-222 addGiftbtn">ADD GIFT WRAP</button>
                  </div>
               </div>
            </div>
            <div class="priceBlock-container">
               <p class="priceBlock-priceHeader">PRICE DETAILS</p>
               <div class="priceBreakUp-orderSummary">
                  <div class="priceDetail-row">
                     <span>Total MRP</span>
                     <span class="priceDetail-value actual-price">₹{currentData?.price}</span>
                  </div>
                  <div class="priceDetail-row">
                     <span>Discount on MRP</span>
                     <span class="priceDetail-value discount-price teal-1">₹{(+currentData?.price)-(+currentData?.off_price)}</span>
                  </div>
                  <div class="priceDetail-row">
                     <span>Coupon Discount</span>
                     <span class="priceDetail-value applyCoupon">Apply Coupon</span>
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
                  <span class="priceDetail-total">₹{+currentData?.price+99+10}</span>
               </div>
            </div>
            <div class="orderbtn-container">
              
               <button class="order-btn"><Link to={`/menpage/address/${currentData?.Idno}`}>PLACE ORDER</Link></button>
            </div>
         </div>
    </div>
    </Container>
    </>

  )
}

export default Bag;
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
 // Rating Desing 
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
 
 // Styles for Bag Page 
 .navbar-header {
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 60px;
   border-bottom: 1px solid #f5f5f6;
   letter-spacing: 2px;
   font-weight: 600;
 }
 .navbar-secureContainer,
 .navbar-logo {
   width: 25%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 12px;
 }
 .navbar-checkout-steps {
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
   max-width: 900px;
   margin: auto;
 }
 
 .block > .left-block {
   width: 60%;
   padding-right: 15px;
   border-right: 1px solid #eaeaec;
   padding-top: 25px;
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
 
 .addressStrip-change {
   padding: 8px 16px;
   font-size: 10px;
   font-weight: 600;
   border-radius: 2px;
   background-color: rgb(255, 255, 255);
   color: rgb(255, 63, 108);
   border: 1px solid rgb(255, 63, 108);
   cursor: pointer;
 }
 .offerStrip {
   padding: 16px;
   border-radius: 4px;
   border: 1px solid #eaeaec;
 }
 .offer-title {
   font-weight: 700;
   font-size: 12px;
   color: #535766;
 }
 .offer-items > li {
   font-size: 13px;
   color: #282c3f;
   margin-left: 6%;
 }
 .offer-hide {
   display: none;
   font-size: 13px;
   color: #282c3f;
   margin-left: 6%;
 }
 
 .more-text {
   margin-left: 6%;
   color: #ff3f6c;
   font-size: 14px;
   cursor: pointer;
   font-weight: 600;
 }
 .itemContainer-item {
   padding: 8px;
   border-radius: 4px;
   border: 1px solid #eaeaec;
   display: flex;
   justify-content: space-around;
 }
 .itemContainer-tickIcon {
   position: absolute;
   margin: 5px;
   fill: #ff3f6c;
 }
 
 .itemContainer-itemLeft {
   width: 25%;
   height: 150px;
 }
 .itemContainer-itemLeft > img {
   width: 100%;
   height: 100%;
 }
 .itemContainer-itemRight {
   width: 70%;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 .itemContainer-title {
   width: 90%;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   font-size: 12px;
 }
 .sizeQtyContainer {
   display: flex;
   margin: 8px 0px;
 }
 .item-qty,
 .item-size {
   display: inline-block;
   white-space: nowrap;
   padding: 2px 8px;
   background: #f5f5f6;
   color: #282c3f;
   font-weight: 600;
   cursor: pointer;
   margin-right: 12px;
   border-radius: 2px;
   font-size: 14px;
   line-height: 16px;
 }
 .itemContainer-soldby {
   font-size: 12px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   max-width: 62%;
   color: #7b7d83;
 }
 
 .itemPriceContainer {
   display: flex;
   font-size: 17px;
   margin-top: 10px;
 }
 
 .og-price {
   color: #1a286e;
   text-decoration: line-through;
 }
 .deliveryContainer {
   margin-top: 10px;
   font-size: 12px;
   display: flex;
   align-items: center;
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
//   .donationStrip-
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
 
//   Quick Styling CSS 
 
 .btn-111 {
   font-size: 12px;
   position: absolute;
   padding: 4px 16px;
   font-weight: 600;
   border-radius: 2px;
   background-color: rgb(255, 255, 255);
   color: rgb(255, 63, 108);
   border: 1px solid #ff527b;
   cursor: pointer;
 }
 .btn-222 {
   margin-top: 8px;
   font-size: 12px;
   font-weight: 600;
   border-radius: 2px;
   border: none;
   background-color: transparent;
   color: rgb(255, 63, 108);
   cursor: pointer;
 }
 .btn-333 {
   width: 100%;
   letter-spacing: 1px;
   margin-top: 16px;
   margin-bottom: 16px;
   font-size: 14px;
   font-weight: 600;
   border-radius: 2px;
   border: none;
   padding: 10px 16px;
   background-color: rgb(255, 63, 108);
   color: rgb(255, 255, 255);
   cursor: pointer;
 }
 .KnowMore {
   color: #ff3f6c;
   font-weight: 600;
   cursor: pointer;
   width: fit-content;
   font-size: 14px;
   margin-top: 10px;
 }
 .priceDetail-applyCoupon {
   color: #ff3f6c;
   font-weight: 600;
   cursor: pointer;
   width: fit-content;
   font-size: 12px;
 }
 .width-80 {
   width: 80%;
 }
 .fs-10 {
   font-size: 10px;
   margin-top: 5px;
   color: #535665;
 }
 .fs-12 {
   font-size: 12px;
   margin-top: 5px;
 }
 .fs-14 {
   font-size: 14px;
   margin-top: 5px;
   line-height: 18px;
 }
 .mg-top-20 {
   margin-top: 20px;
 }
 .mg-top-10 {
   margin-top: 10px;
   display: flex;
   align-items: center;
 }
 .flex {
   display: flex;
   align-items: center;
 }
 .strikethrough {
   text-decoration: line-through;
 }
 .orange-1 {
   color: #ff905a;
 }
 .pink-1 {
   color: #ff3f6c;
 }
 .gray-1 {
   color: #535665;
 }
 .gray-2 {
   color: #d4d5d9;
 }
 
 .teal-1 {
   color: #03a685;
 }
 
 .fw-600 {
   font-weight: 600;
 }
 
`