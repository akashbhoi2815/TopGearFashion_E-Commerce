import React from 'react'
import "../css/Payment.css"

const Payment = () => {
  return (
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
                           <input
                              class="cardNumber"
                              type="tel"
                              maxlength="16"
                              minlength="16"
                              pattern="[0-9]{16}"
                              value=""
                              placeholder="Card Number"
                           />
                           <input class="cardName" type="text" maxlength="20" value="" placeholder="Name on Card" />
                           <div class="cardExpiryContainer">
                              <input class="cardExp" type="tel" minlength="5" pattern="[0-9]{2}/[0-9]{2}" value="" placeholder="Valid Thru(MM/YY)" />
                              <input class="cardCVV" type="tel" minlength="4" pattern="[0-9]{4}" value="" placeholder="CVV" />
                           </div>
                           <div class="cardOTPContainer">
                              <input class="cardotpBtn" type="submit" value="Send OTP" />
                              <input class="cardOTP" type="tel" maxlength="6" pattern="[0-9]{6}" value="" placeholder="Enter OTP" />
                           </div>
                           <p class="OTPVerificationMsg">OTP Varified Successfully</p>
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
                  <span class="priceDetail-total">-</span>
               </div>
            </div>
            <p class="PaymentVerificationMsg">Varifying Payment...</p>
            <div class="orderbtn-container">
               <button class="order-btn">PLACE ORDER</button>
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
  )
}

export default Payment
