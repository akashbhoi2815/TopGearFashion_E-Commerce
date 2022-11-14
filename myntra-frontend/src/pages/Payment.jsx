import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getMenData } from '../redux/appReducer/action';
import styled from "styled-components"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
   const { id } = useParams();
   const mendata = useSelector((store)=>store.appReducer.mensdata);
   const [currentData, setCurrentData] = useState({})
   const dispatch = useDispatch()
   const navigate = useNavigate()
   console.log('mendata: ',id, mendata);

 useEffect(() => {
   if(mendata.length === 0){
      dispatch(getMenData())
   }
 }, [dispatch,mendata.length])

 useEffect(() => {
   if(id){
     const current = mendata.find((e)=> e.Idno ==+id);
     current && setCurrentData(current)
   }
 }, [id,mendata])
  const handleClick = (e) =>{
   // e.preventDefault();
   alert("Your Payment is Successful")
   navigate("/lastpage")
  }

  return (
   <>
   <Navbar/>
   <Container>
    <div>
      <div class="navbar">
         <nav class="navbar-header">
            <div class="navbar-logo"><a href="" class="myntraweb-sprite desktop-logo sprites-headerLogo"></a></div>
            <ol class="navbar-checkout-steps">
               <li class="">BAG</li>
               <li class="divider"></li>
               <li class="">ADDRESS</li>
               <li class="divider"></li>
               <li class="active">PAYMENT</li>
            </ol>
            <div class="navbar-secureContainer">
               <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" class="secureIcon" width="26" height="28" />
               <div class="secure">100% SECURE</div>
            </div>
         </nav>
      </div>
      <div class="block">
         <div class="left-block">
            <div class="offerStrip">
               <h5 class="flex offer-title"><span class="myntraweb-sprite sprites-OfferIcon"></span> Available Offers</h5>
               <ul class="offer-items">
                  <li>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500. TCA</li>
                  <div class="offer-hide">
                     <li>10% Instant Discount on Axis Bank Credit and Debit Cards on a min spend of Rs 3,000. TCA</li>
                     <li>Flat Rs 150 Cashback on Paytm Wallet and Postpaid transaction on a min spend of Rs 1,500. TCA</li>
                     <li>15% Cashback upto Rs 750 On ZestMoney Transactions. TCA</li>
                     <li>10% Instant Discount + 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                     <li>10% Cashback upto Rs 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000. TCA</li>
                     <li>Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik.TCA</li>
                     <li>Please enable Online transactions on your ICICI and Axis Bank Cards for a seamless shopping experience</li>
                  </div>
                  <a class="more-text flex">Show More <span class="myntraweb-sprite sprites-expandIcon"></span></a>
               </ul>
            </div>
            <div class="paymentContainer">
               <div class="payment-Heading">Choose Payment Mode</div>
               <div class="payment-item">
                  <div class="payment-itemLeft">
                     <div class="paymentOptions paymentOptions-UPI">BHIM UPI</div>
                     <div class="paymentOptions paymentOptions-Card">Credit/Debit Card</div>
                     <div class="paymentOptions paymentOptions-NetBanking">NetBanking</div>
                     <div class="paymentOptions paymentOptions-EMI">EMI/Pay Later</div>
                     <div class="paymentOptions paymentOptions-COD">Cash On Delivery</div>
                  </div>
                  <div class="payment-itemRight">
                     <div class="PaymentCardContainer">
                        <div class="payment-Heading">CREADIT/DEBIT CARD</div>
                        <form class="cardDetailsContainer">
                           <input type="text" placeholder='Number of the card'/>
                           <input type="text" placeholder="Name on Card" />
                           <input type="date" placeholder="Valid Through(MM/YY)" />
                           <input type="number" placeholder='CVV' />
                           <input  type="button" value="Make Payment" onClick={() =>handleClick()}/>
                        </form>
                     </div>
                  </div>
               </div>
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
                  <span class="priceDetail-value discount-price teal-1">₹{(+currentData?.price)-(+currentData?.off_price)}</span>
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
               <span class="priceDetail-total">₹{+currentData?.price+99+10}</span>
            </div>
         </div>
         </div>
      </div>
      <div class="bagfootercontainer">
         <div class="bagfooter-images">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="" />
         </div>
         <div class="bagfooter-help">Need help? Contact Us</div>
      </div>
    </div>
    </Container>

    <Footer/>
    </>
  )
}

export default Payment

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
//  navbar 
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

//  block css 
.block {
   display: flex;
   max-width: 1000px;
   margin: auto;
}

//  left block 
.block > .left-block {
   width: 60%;
   padding-right: 15px;
   border-right: 1px solid #eaeaec;
   padding-top: 25px;
   display: flex;
   flex-direction: column;
   gap: 8px;
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

.payment-Heading {
   font-weight: 600;
   margin: 15px 0 15px 25px;
   color: #424553;
}
.paymentContainer {
   margin: 0px;
}
.payment-item {
   display: flex;
   border: 1px solid #eaeaec;
   margin: 0px;
}
.payment-itemLeft {
   width: 30%;
   background-color: #f4f4f5;
   margin: 0px;
}
.paymentOptions {
   margin: 0px;
   border-bottom: 1px solid #eaeaec;
   cursor: pointer;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 600;
   color: #424553;
}
.paymentOptions-Card {
   background-color: white;
}
.payment-itemRight {
   width: 70%;
   padding: 8px 20px;
}
.cardDetailsContainer {
   display: flex;
   flex-direction: column;
}

input {
   height: 35px;
   border: 1px solid #d4d5d9;
   padding: 0px 10px;
   border-radius: 2px;
}

//  Right Block 
.block > .right-block {
   width: 45%;
   padding-left: 15px;
   padding-top: 15px;
   display: flex;
   flex-direction: column;
   gap: 8px;
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
.PaymentVerificationMsg {
   display: none;
   color: teal;
   font-weight: 600;
   font-size: 14px;
   text-align: center;
}

//  footer 
.bagfooter-images {
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 50%;
   margin-top: 30px;
}
.bagfooter-images > img {
   width: 6%;
}
.bagfooter-help {
   width: 15%;
   font-size: 14px;
   font-weight: 500;
   margin-top: 20px;
}

`