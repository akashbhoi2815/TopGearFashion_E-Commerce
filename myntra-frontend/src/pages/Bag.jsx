import React from 'react'
import "../css/Bag.css"

const Bag = () => {
    return (
        <>
       
    <div class="container">
      <div class="div1">
        <div class="div1main">
          <div class="div1a" id="logo">
            <img class="logo" src="/Images/myntraLogo.jpg" />
          </div>

          <div class="div1b">
            <a><p class="bagGreen">BAG</p></a>
            <p>--------</p>
            <a><p>ADDRESS</p></a>
            <p>--------</p>
            <a><p>PAYMENT</p></a>
          </div>

          <div class="div1c">
            <img
              class="greenTick"
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            />
            <p>100% SECURE</p>
          </div>
        </div>
      </div>

      <div class="div2">
        <div class="div2a">
          

          <div class="div2a2">
            <div class="offersList" id="sdiv">
              <ul>
                <span class="bold offers"
                  ><img
                    src="/Images/discounts.jpg"
                    class="discounts"
                  /><strong>Available Offers</strong>
                </span>
                <li>
                  10% Instant Discount with HSBC Credit cards up to Rs 1,000 on
                  min spend of Rs 3,500. TCA
                </li>
                <span id="dots">...</span>
                <span id="showDiv">
                  <li>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </li>
                  <li>
                    10% Cashback up to Rs 750 on Dhani OneFreedom Card on a min
                    spend of Rs 1,200. TCA
                  </li>
                  <li>
                    Upto Rs 500 Cashback on Mobikwik wallet transaction of min
                    Rs 999. Use Code MBK500 on Mobikwik. TCA
                  </li>
                  <li>
                    5% Cashback upto Rs 200 on a minimum spend of Rs 1,500 with
                    PayZapp. TCA
                  </li>
                  <li>
                    Flat Rs 200 Cashback on first Airtel Payments Bank
                    transaction on Myntra on a min spend of Rs 2000. TCA
                  </li>
                </span>
              </ul>
              <div class="knowMore1" onclick="showFunction()" id="myBtn">
                Show More
                <img
                  src="https://img.icons8.com/material-outlined/18/000000/circled-chevron-down.png"
                />
              </div>
            </div>
          </div>

          <div class="div2a3" id="items">
            <div class="itemSelected">
              <span>
                <input type="checkbox" checked /><label
                  >2/2 ITEMS SELECTED</label
                ></span
              >
              <div>
                <span class="btns"
                  ><button onclick="clearData()"><strong>REMOVE</strong></button></span
                ><span class="btns move"
                  ><button >
                    <strong>MOVE TO WISHLIST</strong>
                  </button></span
                >
              </div>
            </div>
          </div>
          <div class="addMore">
            <img src="/Images/wish.jpg" class="wish" /><a
              href="/wishlist/wishlist.html"
            >
              Add More From Wishlist
            </a>
          </div>
        </div>

        <div class="div2b">
          <div class="div2b1">
            <div class="div2b1-donate">DONATE FOR COVID-19 RELIEF</div>

            <div class="div2b1-help">
              <input type="checkbox" id="help-india" name="help-india" />
              <label for="help-india">Help India fight COVID-19</label>
            </div>

            <div class="div2b1-amount">
              <div class="r10">Rs 10</div>
              <div class="r50">Rs 50</div>
              <div class="r100">Rs 100</div>
              <div class="rOther">Other</div>
            </div>

            <div class="knowMore">Know More</div>
            <hr class="hr" />

            <div class="coupons">
              <div class="coupons1">COUPONS</div>
              <div class="coupons2">
                <span class="apply-cpn"
                  ><img
                    src="/Images/Coupon.jpg"
                    class="coupon-img"
                  />Apply Coupons</span
                >
                <button onclick="couponApply()" class="apply-btn">APPLY</button>
              </div>
              <hr class="hr2" />
            </div>
          </div>

          <div class="div2b2">
            <div class="priceDetails">PRICE DETAILS(2 Items)</div>
            <div class="totalAmt">
              <div class="totalMRP">
                <div>Total MRP</div>
                <div id="total-price">0</div>
              </div>
              <div class="totalMRP">
                <div>Discount On MRP</div>
                <div class="green-txt" id="discount-price">-0</div>
              </div>
              <div class="totalMRP">
                <div>Coupon Discount</div>
                <div id="show-discount">
                  <button onclick="couponApply()" class="applyCoupon">Apply Coupon</button>
                </div>
                
              </div>
              <div class="totalMRP">
                <div>
                  Convinience Fee<span class="knowMore"
                    >&nbsp&nbsp&nbsp Know More</span
                  >
                </div>
                <div class="green-txt">FREE</div>
              </div>
              <hr />
            </div>
            <div class="finalTotal">
              <div>Total Amount</div>
              <div id="total-amount">0</div>
            </div>
          </div>

          <div class="div2b3">
            <div class="noConFee">
              <img src="/Images/noConvFee.jpg" class="noConvFee" />
            </div>

            <button onclick="gotoaddress()" class="place-btn">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
    <div id="coppon-change">
      <div>
        <h5>APPLY COUPON</h5>
        <button onclick="closeWindow()">close</button>
        

      </div>
      <div>
        <hr/>
      </div>
      
      <div>
        <div>
          <input type="checkbox" name="myntra10" id="myntra10"/>
          <label for="">MYNTRA10</label>
          <p>10% discount</p>
        </div>
        
        <div>
          <input type="checkbox" name="myntra10" id="myntra20"/>
          <label for="">MYNTRA20</label>
          <p>20% discount</p>
        </div>
        
        <div>
          <input type="checkbox" name="myntra10" id="myntra30"/>
          <label for="">MYNTRA30</label>
          <p>30% discount</p>
        </div>
        
        

      </div>
      <div>
        <button onclick="getcouponDiscount()">APPLY</button>
      </div>

    </div>
    </>
     
    )
}

export default Bag
