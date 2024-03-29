import React from "react";
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/">
          <img
            style={{ borderRadius: "60%", height: "50px" }}
            src="TGF.jpeg"
            alt="topgearfashion-logo"
          />
        </Link>
        <div style={{ color: "white" }} className={styles.men}>
          <Link to="/menpage">MEN</Link>
          <div className={styles.subMenu}>
            <ul>
              <div className={styles.categories}>
                <h3>Topwear</h3>
                <p>T-Shirts</p>
                <p>Casual Shirts</p>
                <p>Formal Shirts</p>
                <p>Sweatshirts</p>
                <p>Sweaters</p>
                <p>Jackets</p>
                <p>Blazers & Coats</p>
                <p>Suits</p>
                <p>Rain Jackets</p>

                <hr />

                <h3>Indian & Festive Wear</h3>
                <p>Kurtas & Kurta Sets</p>
                <p>Sherwanis</p>
                <p>Nehru Jackets</p>
                <p>Dhotis</p>
              </div>
              <div className={styles.categories}>
                <h3>Bottomwear</h3>
                <p>Jeans</p>
                <p>Casual Trousers</p>
                <p>Formal Trousers</p>
                <p>Shorts</p>
                <p>Track Pants & Joggers</p>

                <hr />

                <h3>Innerwear & Sleepwear</h3>
                <p>Briefs & Trunks</p>
                <p>Boxers</p>
                <p>Vests</p>
                <p>Sleepwear & Loungewear</p>
                <p>Thermals</p>

                <hr />

                <h3>Plus Size</h3>
              </div>
              <div className={styles.categories}>
                <h3>Footwear</h3>
                <p>Casual Shoes</p>
                <p>Sports Shoes</p>
                <p>Formal Shoes</p>
                <p>Sneakers</p>
                <p>Sandals & Floaters</p>
                <p>Flip Flops</p>
                <p>Socks</p>

                <hr />

                <h3>Personal Care & Grooming</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
              <div className={styles.categories}>
                <h3>Sports & Active Wear</h3>
                <p>Sports Shoes</p>
                <p>Sports Sandals</p>
                <p>Active T-Shirts</p>
                <p>Track Pants & Shorts</p>
                <p>Tracksuits</p>
                <p>Jackets & Sweatshirts</p>
                <p>Sports Accessories</p>
                <p>Swimwear</p>

                <hr />

                <h3>Gadgets</h3>
                <p>Smart Wearables</p>
                <p>Fitness Gadgets</p>
                <p>Headphones</p>
                <p>Speakers</p>
              </div>
              <div className={styles.categories}>
                <h3>Fasion Accessories</h3>
                <p>Wallets</p>
                <p>Belts</p>
                <p>Perfumes & Body Mists</p>
                <p>Trimmers</p>
                <p>Deodorants</p>
                <p>Ties, Cufflinks & Pocket Squares</p>
                <p>Accessory Gift Sets</p>
                <p>Caps & Hats</p>
                <p>Mufflers, Scarves & Gloves</p>
                <p>Phone Cases</p>
                <p>Rings & Wristwear</p>
                <p>Helmets</p>

                <hr />

                <h3>Bags & Backpacks</h3>
                <h3>Luggages & Trolleys</h3>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.women}>
          <Link to="/womenpage">WOMEN</Link>
          <div className={styles.subMenu}>
            <ul>
              <div className={styles.categories}>
                <h3>Indian & Fusion Wear</h3>

                <p>Kurtas & Suits</p>
                <p>Kurtis, Tunics & Tops</p>
                <p>Sarees</p>
                <p>Ethnic Wear</p>
                <p>Leggings, Salwars & Churidars</p>
                <p>Skirts & Palazzos</p>
                <p>Dress Materials</p>
                <p>Lehenga Cholis</p>
                <p>Dupattas & Shawls</p>
                <p>Jackets</p>

                <hr />

                <h3>Belts, Scarves & More</h3>
                <h3>Watches & Wearables</h3>
              </div>
              <div className={styles.categories}>
                <h3>Western Wear</h3>

                <p>Dresses</p>
                <p>Tops</p>
                <p>Tshirts</p>
                <p>Jeans</p>
                <p>Trousers & Capris</p>
                <p>Shorts & Skirts</p>
                <p>Co-ords</p>
                <p>Playsuits</p>
                <p>Jumpsuits</p>
                <p>Shrugs</p>
                <p>Sweaters & Sweatshirts</p>
                <p>Jackets & Coats</p>
                <p>Blazers & Waistcoats</p>

                <hr />

                <h3>Plus Size</h3>
              </div>
              <div className={styles.categories}>
                <h3>Maternity</h3>

                <h3>Sunglasses & Frames</h3>
                <h3>Footwear</h3>
                <p>Flats</p>
                <p>Casual Shoes</p>
                <p>Heels</p>
                <p>Boots</p>
                <p>Sports Shoes & Floaters</p>

                <hr />

                <h3>Sports & Active Wear</h3>

                <p>Clothing</p>
                <p>Footwear</p>
                <p>Sports Accessories</p>
                <p>Sports Equipment</p>
              </div>
              <div className={styles.categories}>
                <h3>Lingerie & Sleepwear</h3>

                <p>Bra</p>
                <p>Briefs</p>
                <p>Shapewear</p>
                <p>Sleepwear & Loungewear</p>
                <p>Swimwear</p>
                <p>Camisoles & Thermals</p>

                <hr />

                <h3>Beauty & Personal Care</h3>

                <p>Makeup</p>
                <p>Skincare</p>
                <p>Premium Beauty</p>
                <p>Lipsticks</p>
                <p>Fragrances</p>
              </div>
              <div className={styles.categories}>
                <h3>Gadgets</h3>

                <p>Smart Wearables</p>
                <p>Fitness Gadgets</p>
                <p>Headphones</p>
                <p>Speakers</p>

                <hr />

                <h3>Jewellery</h3>

                <p>Fashion Jewellery</p>
                <p>Fine Jewellery</p>
                <p>Earrings</p>

                <hr />

                <h3>Backpacks</h3>

                <h3>Handbags, Bags & Wallets</h3>
                <h3>Luggages & Trolleys</h3>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.kids}>
          <a href="#">KIDS</a>
          <div className={styles.subMenu}>
            <ul>
              <div className={styles.categories}>
                <h3>Boys Clothing</h3>

                <p>T-Shirts</p>
                <p>Shirts</p>
                <p>Shorts</p>
                <p>Jeans</p>
                <p>Trousers</p>
                <p>Clothing Sets</p>
                <p>Ethnic Wear</p>
                <p>Track Pants & Pyjamas</p>
                <hr />
                <p>Jacket & Sweater</p>
                <p>Sweatshirts</p>
                <p>Party Wear</p>
                <p>Innerwear & Thermals</p>
                <p>Nightwear & Loungewear</p>
                <p>Value Packs</p>
              </div>
              <div className={styles.categories}>
                <h3>Girls Clothing</h3>

                <p>Dresses</p>
                <p>TOp5</p>
                <p>Tshirts</p>
                <p>Clothing Sets</p>
                <p>Lehenga choli</p>
                <p>Kurta Sets</p>
                <p>Party wear</p>
                <p>Dungarees & Jumpsuits</p>
                <p>Skirts & shorts</p>
                <p>Tights & Leggings</p>
                <p>Jeans, Trousers & Capris</p>
                <hr />
                <p>Jacket & Sweater</p>
                <p>Sweatshirts</p>
                <p>Innerwear & Thermals</p>
                <p>Nightwear & Loungewear</p>
                <p>Value Packs</p>
              </div>
              <div className={styles.categories}>
                <h3>Footwear</h3>

                <p>Casual Shoes</p>
                <p>Flipflops</p>
                <p>Sports Shoes</p>
                <p>Flats</p>
                <p>Sandals</p>
                <p>Heels</p>
                <p>School Shoes</p>
                <p>Socks</p>

                <hr />

                <h3>Toys</h3>

                <p>Learning & Development</p>
                <p>Activity Toys</p>
                <p>Soft Toys</p>
                <p>Action Figure / Play set</p>
              </div>
              <div className={styles.categories}>
                <h3>Infants</h3>

                <p>Bodysuits</p>
                <p>Rompers & Sleepsuits</p>
                <p>Clothing Sets</p>
                <p>Tshirts & Tops</p>
                <p>Dresses</p>
                <p>Bottom wear</p>
                <p>Winter Wear</p>
                <p>Innerwear & Sleepwear</p>
                <p>Infant Care</p>

                <hr />

                <h3>Home & Bath</h3>

                <h3>Personal Care</h3>
              </div>
              <div className={styles.categories}>
                <h3>Kids Accessories</h3>

                <p>Bags & Backpacks</p>
                <p>Watches</p>
                <p>Jewellery & Hair accessory</p>
                <p>Sunglasses</p>
                <p>Masks & Protective Gears</p>
                <p>Caps & Hats</p>

                <hr />

                <h3>Brands</h3>

                <p>H&M</p>
                <p>Max Kids</p>
                <p>Pantaloons</p>
                <p>United Colors Of Benetton Kids</p>
                <p>US Polo Assn. Kids</p>
                <p>Mothercare</p>
                <p>HRX</p>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.homeLiving}>
          <a href="#">HOME & LIVING</a>
          <div className={styles.subMenu}>
            <ul>
              <div className={styles.categories}>
                <h3>Bed Linen a Furnishing</h3>

                <p>Bed Runners</p>
                <p>Mattress Protectors</p>
                <p>Bedsheets</p>
                <p>Bedding Sets</p>
                <p>Blankets Quilts & Dohars</p>
                <p>Pillows & Pillow Covers</p>
                <p>Bed Covers</p>
                <p>Diwan Sets</p>
                <p>Chair Pads & Covers</p>
                <p>Sofa Covers</p>

                <hr />

                <h3>Flooring</h3>

                <p>Floor Runners</p>
                <p>Carpets</p>
                <p>Floor Mats & Dhurries</p>
                <p>Door Mats</p>
              </div>
              <div className={styles.categories}>
                <h3>Bath</h3>

                <p>Bath Towels</p>
                <p>Hand & Face Towels</p>
                <p>Beach Towels</p>
                <p>Towels Set</p>
                <p>Bath Rugs</p>
                <p>Bath Robes</p>
                <p>Bathroom Accessories</p>
                <p>Shower Curtains</p>

                <hr />

                <h3>Lamps & Lighting</h3>

                <p>Floor Lamps</p>
                <p>Ceiling Lamps</p>
                <p>Table Lamps</p>
                <p>Wall Lamps</p>
                <p>Outdoor Lamps</p>
                <p>String Lights</p>
              </div>
              <div className={styles.categories}>
                <h3>Home Décor</h3>

                <p>Plants & Planters</p>
                <p>Aromas & Candles</p>
                <p>Clocks</p>
                <p>Mirrors</p>
                <p>Wall Décor</p>
                <p>Festive Decor</p>
                <p>Pooja Essentials</p>
                <p>Wall Shelves</p>
                <p>Fountains</p>
                <p>Showpieces & Vases</p>
                <p>Ottoman</p>

                <hr />

                <h3>Cushions & Cushion Covers</h3>
                <h3>Curtains</h3>
              </div>
              <div className={styles.categories}>
                <h3>Home Gift Sets</h3>

                <h3>Kitchen & Table</h3>

                <p>Table Runners</p>
                <p>Dinnerware & Serveware</p>
                <p>Cups and Mugs</p>
                <p>Bakeware & Cookware</p>
                <p>Kitchen Storage & Tools</p>
                <p>Bar & Drinkware</p>
                <p>Table Covers & Furnishings</p>

                <hr />

                <p>Storage</p>

                <p>Bins</p>
                <p>Hangers</p>
                <p>Organisers</p>
                <p>Hooks & Holders</p>
                <p>Laundry Bags</p>
              </div>
              <div className={styles.categories}>
                <h3>Brands</h3>

                <p>H&M</p>
                <p>Marks & Spencer</p>
                <p>Home Centre</p>
                <p>Spaces</p>
                <p>D'Decor</p>
                <p>Story@Home</p>
                <p>Pure Home & Living</p>
                <p>Swayam</p>
                <p>Raymond Home</p>
                <p>Maspar</p>
                <p>Trident</p>
                <p>Cortina</p>
                <p>Random</p>
                <p>Ellementry</p>
                <p>ROMEE</p>
                <p>SEJ by Nisha Gupta</p>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.beauty}>
          <a href="#">BEAUTY</a>
          <div className={styles.subMenu}>
            <ul>
              <div className={styles.categories}>
                <h3>Makeup</h3>

                <p>Lipstick</p>
                <p>Lip Gloss</p>
                <p>Lip Liner</p>
                <hr />
                <p>Mascara</p>
                <p>Eyeliner</p>
                <p>Kajal</p>
                <p>Eyeshadow</p>
                <p>Foundation</p>
                <p>Primer</p>
                <p>Concealer</p>
                <p>Compact</p>
                <p>Nail Polish</p>
              </div>
              <div className={styles.categories}>
                <h3>Skincare, Bath & Body</h3>

                <p>Face Moisturiser</p>
                <p>Cleanser</p>
                <p>Masks & Peel</p>
                <p>Sunscreen</p>
                <p>Serum</p>
                <p>Face Wash</p>
                <p>Eye Cream</p>
                <p>Lip Balm</p>
                <p>Body Lotion</p>
                <p>Body Wash</p>
                <p>Body Scrub</p>
                <p>Hand Cream</p>

                <hr />

                <h3>Baby Care</h3>
                <h3>Masks</h3>
              </div>
              <div className={styles.categories}>
                <h3>Haircare</h3>

                <p>Shampoo</p>
                <p>Conditioner</p>
                <p>Hair Cream</p>
                <p>Hair Oil</p>
                <p>Hair Gel</p>
                <p>Hair Color</p>
                <p>Hair Serum</p>
                <p>Hair Accessory</p>

                <hr />

                <h3>Fragrances</h3>

                <p>Perfume</p>
                <p>Deodorant</p>
                <p>Body Mist</p>
              </div>
              <div className={styles.categories}>
                <h3>Appliances</h3>

                <p>Hair Straightener</p>
                <p>Hair Dryer</p>
                <p>Epilator</p>

                <hr />

                <h3>Men's Grooming</h3>

                <p>Trimmers</p>
                <p>Beard Oil</p>
                <p>Hair Wax</p>

                <hr />

                <h3>Beauty Gift & Makeup Set</h3>

                <p>Beauty Gift</p>
                <p>Makeup Kit</p>

                <hr />

                <h3>Premium Beauty</h3>
                <h3>Wellness & Hygiene</h3>
              </div>
              <div className={styles.categories}>
                <h3>Top Brands</h3>

                <p>Lakme</p>
                <p>Maybelline</p>
                <p>LOreal</p>
                <p>Philips</p>
                <p>Bath & Body Works</p>
                <p>THE BODY SHOP</p>
                <p>Biotique</p>
                <p>Mamaearth</p>
                <p>MCaffeine</p>
                <p>Nivea</p>
                <p>Lotus Herbals</p>
                <p>LOreal Professionnel</p>
                <hr />
                <p>KAMA AYURVEDA</p>
                <p>M.A.C</p>
                <p>Forest Essentials</p>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.studio}>
          <a href="#">
            STUDIO <sup>NEW</sup>
          </a>
          <div className={styles.subMenu}>
            <ul className={styles.studio}>
              <img
                src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                alt="studio_logo"
              />
              <p>Your daily inspiration for everything fashion</p>
              <img
                className={styles.studioBanner}
                src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                alt="nav_banner"
              />
              <button>
                EXPLORE STUDIO <span>&#8250;</span>
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <img src="images/search_logo.png" alt="" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div class="rightSideIcons profile">
          <span style={{ color: "#f6f6f8 " }}>
            <CgProfile />
          </span>

          <Link to="/signup">
            <label for="">Profile</label>
          </Link>

          <div className={styles.signin}>
            <ul>
              <li>
                <h3>Welcome</h3>
                <p>To access account and manage orders</p>
                <button id="btn" type="submit">
                  LOGIN/SIGNUP
                </button>
              </li>
              <hr />
              <li>Order</li>
              <li>Wishlist</li>
              <li>Gift Cards</li>
              <li>Contact Us</li>
              <li>Myntra Insider</li>
              <hr />
              <li>Myntra Credit</li>
              <li>Coupons</li>
              <li>Saved Cards</li>
              <li>Saved Addresses</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSideIcons}>
          <span style={{ color: "#f6f6f8 " }}>
            <BsFillHeartFill />
          </span>
          <label
            style={{ fontSize: "15px", paddingTop: "5.5px", color: "#f6f6f8" }}
            for=""
          >
            Wishlist
          </label>
        </div>
        <div class="rightSideIcons bag">
          <span style={{ color: "#f6f6f8 " }}>
            <HiOutlineShoppingBag />
          </span>
          <label for="" style={{ color: "#f6f6f8 " }}>
            Bag
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
