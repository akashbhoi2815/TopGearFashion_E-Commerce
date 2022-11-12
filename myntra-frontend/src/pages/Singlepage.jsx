import React from 'react'
import "../css/Singlepage.css"
const Singlepage = () => {
  return (
    <>
    {/* Start  */}

      <div class="container">
         <div class="img-card">
             <div>
               <img
                  class="pdimg"
                  src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/7f473119-8e08-4548-b5f3-689c25b698b11541830165496-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/1072681/2020/1/20/9de2d7dc-e239-4327-b7d0-096c80ac3a121579503443912-Roadster-Men-Charcoal-Melange-Printed-Round-Neck-T-shirt-364-1.jpg"
                  alt=""
               />
            </div>
            <div>
               <img
                  class="pdimg"
                  src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_210,c_limit,fl_progressive/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg"
                  alt=""
               />
            </div>
         </div>
         <div class="details-card">
            <h1 class="pdtitle">HRX by Hrithik Roshan</h1>
            <h1 class="pdname gray-1">Men Yellow Printed Cotton Pure Cotton T-shirt</h1>
            <div class="rating-card">
               <p>4.3</p>
               <span class="myntraweb-sprite sprites-productRatingsExcellentIcon "></span>
               <p class="gray-2">|</p>
               <p>43.2k Ratings</p>
            </div>
            <hr />
            <div class="price-card">
               <h3 id="price">Rs. 315 </h3>
               <span class="strikethrough gray-1 og-price"> Rs. 699</span>
               <span class="orange-1 OFF"> (55% OFF)</span>
            </div>
            <h6 class="teal-1">inclusive of all taxes</h6>
            <h5 class="mg-top-20">MORE COLOR</h5>
            <div class="pdmorecolor">
               <img
                  src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg"
                  alt=""
               />
               <img
                  src="http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg"
                  alt=""
               />
            </div>
            <div class="select-size mg-top-20">
               <h5>SELECT SIZE</h5>
               <button class="sizebtn" value="S">S</button>
               <button class="sizebtn" value="M">M</button>
               <button class="sizebtn" value="L">L</button>
               <button class="sizebtn" value="XL">XL</button>
               <button class="sizebtn" value="XLL">XLL</button>
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
    </>
  )
}

export default Singlepage
