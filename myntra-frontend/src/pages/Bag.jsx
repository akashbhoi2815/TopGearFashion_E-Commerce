import React from 'react'
import "../css/Bag.css"

const Bag = () => {
  return (
    <>
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
                        src="https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12816878/2020/12/8/992feaf9-6ccf-4880-8076-100237f3c1c91607426778122-HERENOW-Men-Tshirts-2751607426776423-1.jpg"
                        alt=""
                     />
                  </div>
                  <div class="itemContainer-itemRight">
                     <h5 class="itemContainer-brand">HERE &amp; NOW</h5>
                     <p class="itemContainer-title">HERENOW Men White Printed Pure Cotton T-shir Cotton T-shir Cotton T-shirt</p>
                     <p class="itemContainer-soldby">Sold By: Omnitech Retail</p>
                     <div class="sizeQtyContainer">
                        <div class="item-size">Size: M</div>
                        <div class="item-qty">Qty: 1</div>
                     </div>
                     <div class="itemPriceContainer">
                        <h5 class="item-price">₹ 315</h5>
                        <h5 class="og-price"> ₹ 699</h5>
                        <h5 class="orange-1"> 55% OFF</h5>
                     </div>
                     <div class="deliveryContainer">
                        <span class="myntraweb-sprite sprites-greenTickIcon"></span>
                        <span>Delivery By</span>
                        <strong>21 Jun 2022</strong>
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
                     <span class="priceDetail-value actual-price">₹699</span>
                  </div>
                  <div class="priceDetail-row">
                     <span>Discount on MRP</span>
                     <span class="priceDetail-value discount-price teal-1">-₹350</span>
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
                  <span class="priceDetail-total">₹458</span>
               </div>
            </div>
            <div class="orderbtn-container">
               <button class="order-btn">PLACE ORDER</button>
            </div>
         </div>
    </div>
    </>

  )
}

export default Bag;
