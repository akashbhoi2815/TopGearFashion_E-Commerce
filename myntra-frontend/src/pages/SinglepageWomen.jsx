import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getwomenData } from '../redux/appReducer/action';
import styled from "styled-components"

const SinglepageWomen = () => {
   const { id } = useParams();
   const womendata = useSelector((store)=>store.appReducer.womensdata);
   const [currentData, setCurrentData] = useState({})
   const dispatch = useDispatch()
 console.log('womendata: ',id, womendata);

 useEffect(() => {
   if(womendata.length === 0){
     dispatch(getwomenData)
   }
 }, [dispatch,womendata.length])

 useEffect(() => {
    if(id){
     const current = womendata.find((e)=> e.Idno == id) ;
     
     current && setCurrentData(current)
    }
 }, [id,womendata])
 console.log('currentData: ', currentData);

  return (
    <>
    {/* Start  */}
    <Container>
      <div class="container">
         <div class="img-card">
             <div>
               <img
                  class="pdimg"
                  src={currentData?.images?.image1}
                  // src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src={currentData?.images?.image2}
                  // src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/7f473119-8e08-4548-b5f3-689c25b698b11541830165496-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src={currentData?.images?.image3}
                  // src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/1072681/2020/1/20/9de2d7dc-e239-4327-b7d0-096c80ac3a121579503443912-Roadster-Men-Charcoal-Melange-Printed-Round-Neck-T-shirt-364-1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src={currentData?.images?.image4}
                  // src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg"
                  alt=""
               />
            </div>
         </div>
         <div class="details-card">
            <h1 class="pdtitle">{currentData?.title}</h1>
            <h1 class="pdname gray-1">{currentData?.description}</h1>
            <div class="rating-card">
               <p>{currentData?.rating}</p>
               <span class="myntraweb-sprite sprites-productRatingsExcellentIcon "></span>
               <p class="gray-2">|</p>
               <p>43.2k Ratings</p>
            </div>
            <hr />
            <div class="price-card">
               <h3 id="price">Rs. {currentData?.price} </h3>
               <span class="strikethrough gray-1 og-price"> Rs. {currentData?.off_price}</span>
               <span class="orange-1 OFF"> ({currentData?.discount}% OFF)</span>
            </div>
            <h6 class="teal-1">inclusive of all taxes</h6>
            {/* <h5 class="mg-top-20">MORE COLOR</h5> */}
            {/* <div class="pdmorecolor">
               <img
                  src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg"
                  alt=""
               />
               <img
                  src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg"
                  alt=""
               />
            </div> */}
            <div class="select-size mg-top-20">
               <h5>SELECT SIZE</h5>
               {
                  currentData?.sizes?.map((e)=>(
                     <button class="sizebtn" value={e} key={e.toString()}>{e}</button>
                  ))
               }
               {/* <button class="sizebtn" value="S">S</button>
               <button class="sizebtn" value="M">M</button>
               <button class="sizebtn" value="L">L</button>
               <button class="sizebtn" value="XL">XL</button>
               <button class="sizebtn" value="XLL">XLL</button> */}
               <div class="btn-card">
                  <button class="addtobag"><i class="myntraweb-sprite sprites-whiteBag"></i>ADD TO BAG</button>
                  <button class="addtowishlist"><i class="myntraweb-sprite sprites-notWishlisted"></i>WISHLIST</button>
               </div>
            </div>
            <div class="delivery mg-top-20">
               <h5 class="flex">DELIVERY OPTIONS &nbsp;<span class="myntraweb-sprite sprites-deliveryOptionsIcon "> </span></h5>
               <div class="pin">
                  <input id="pinCode" type="number"  placeholder="Enter Pincode"/> <p id="checkPin" class="fs-12">Check</p>
               </div>
               <h5>Please enter PIN code to check delivery time & Pay on Delivery Availability</h5>
               <p class="fs-12 mg-top-20">100% Original Products</p>
               <p class="fs-12">Pay on delivery might be available</p>
               <p class="fs-12">Easy 30 days returns and exchanges</p>
               <p class="fs-12">Try & Buy might be available</p><br/>
            </div>
            <div class="offer mg-top-20">
               <h5 class="flex">BEST OFFERS &nbsp;<span class="myntraweb-sprite sprites-bestOfferIcon"> </span></h5>
               <div class="offer-card">
                  <h5>Best Price: <span class="orange-1 best-price">Rs. 265</span></h5>
                  <ul>
                     <li>Coupon code: <strong>MYNTRA50</strong></li>
                     <li>Coupon Discount: Rs. 50 off (check cart for final savings)</li>
                     <li>Applicable on: Orders above Rs. 100 (only on first purchase)</li>
                  </ul>
                  <p class="fs-12 pink-1">View Eligible Products</p>
               </div>
               <div class="offer-card">
                  <h5>Flat Rs 150 Cashback on Paytm Wallet and Postpaid</h5>
                  <ul>
                     <li>Min spend Rs 1,500. TCA</li>
                  </ul>
                  <p class="fs-12 pink-1">View Eligible Products</p>
               </div>
               <div class="offer-card">
                  <h5>15% Cashback upto Rs 750 on ZestMoney.</h5>
                  <ul>
                     <li>Shop with 0% Interest* EMIs. TCA</li>
                  </ul>
                  <p class="fs-12 pink-1">View Eligible Products</p>
               </div>
               <div class="offer-card">
                  <h5>10% Instant Discount + 5% Unlimited Cashback</h5>
                  <ul>
                     <li>Shop with Flipkart Axis Bank Credit Card; Min Spend Rs 3000</li>
                  </ul>
                  <p class="fs-12 pink-1">View Eligible Products</p>
               </div>
               <div class="offer-card">
                  <h5>EMI option available</h5>
                  <ul>
                     <li>EMI starting from Rs.15/month</li>
                  </ul>
                  <p class="fs-12 pink-1">View Plan</p>
               </div>
            </div>
            <hr/>
            <div class="product-details mg-top-20">
               <h5 class="flex">PRODUCT DETAILS &nbsp;<span class="myntraweb-sprite sprites-productDetailsIcon"> </span></h5>
               <p class="fs-14 width-80">
                  Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.
               </p>
               <div class="offer-details-card">
                  <h5 class="mg-top-10">Features</h5>
                  <p class="fs-12">Athleisure T-shirt can be paired with tracks, khakis or jeans</p>
                  <p class="fs-12">Style: Round Neck</p>
                  <p class="fs-12">Sleeve: Short Sleeves</p>
                  <p class="fs-12">Colour: Yellow</p>
                  <p class="fs-12">Print: Typography</p>
                  <p class="fs-12">Fit: Regular</p>
               </div>
               <div class="offer-details-card">
                  <h5 class="mg-top-10">Size & Fit</h5>
                  <p class="fs-12 ">The model height 6' is wearing a size M</p>
               </div>
               <div class="offer-details-card">
                  <h5 class="mg-top-10">Material & Care</h5>
                  <p class="fs-12 ">100% cotton</p>
                  <p class="fs-12 ">Machine-wash</p>
               </div>
            </div>
         </div>
      </div>
      </Container>
    </>
  )
}

export default SinglepageWomen
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
hr{
  border-top: 1px dotted #8c8b8b;
}
.container {
   margin: 20px;
   display: flex;
   justify-content: space-between;
}
//  product Image CSS
.img-card {
   width: 60%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 15px;
   height: fit-content;
}
.img-card > div {
   width: 96%;
   /* overflow: hidden; */
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

//  Details Card CSS 
.details-card {
   width: 39%;
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
// rating design
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
   width: 8em;
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
@media only screen and (max-width: 855px) {
.img-card {
  width: 58%;
  height: 1022px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
  .img-card::-webkit-scrollbar {
     width: 3px;
   }
   
   .img-card::-webkit-scrollbar-track {
     background-color: rgb(209, 209, 209);
   }
   
   .img-card::-webkit-scrollbar-thumb {
     background-color: rgb(40, 39, 39);
   }
  .details-card {
     width: 38%;
  }
}
@media only screen and (max-width: 745px) {
  .container {
     display: flex;
     flex-direction: column;
  }
  .img-card {
     width: 95%;
     margin: auto;
     height: 845px;
  }
  .details-card {
     width: 95%;
     margin-top: 20px;
  }
}
@media only screen and (max-width: 550px) {
  .details-card {
     width: 95%;
     margin-top: 10px;
  }
}
`
