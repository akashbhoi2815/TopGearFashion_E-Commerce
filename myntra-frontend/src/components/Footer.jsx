import React from 'react'
import styles from './Footer.module.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsYoutube } from 'react-icons/bs';
import StoreBadge from 'react-store-badge';
import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
const Footer = () => {
  return (
    <div className={styles.shadow}>

<Divider/>
<div className={styles.footer}>
    <div>
      <p className={styles.fontbold}>ONLINE SHOPPING</p>
      <p>Men</p>
      <p>Women</p>
      <p>Kids</p>
      <p>Home & Living</p>
      <p>Beauty</p>
      <p>Gift Cards</p>
      <p>Myntra Insider</p>
    </div>


    <div>
      <h4 className={styles.fontbold}>CUSTOMER POLICIES</h4>
      <p>Contact Us</p>
      <p>FAQ</p>
      <p>T&C</p>
      <p>Terms Of Use</p>
      <p>Track Orders</p>
      <p>Shipping</p>
      <p>Cancellation</p>
      <p>Returns</p>
      <p>Privacy Policy</p>
      <p>Grievance Officer</p>
    </div>



    <div>
    <div  className={styles.store}>
      <h4  className={styles.fontbold}>EXPERIENCE MYNTRA APP ON MOBILE</h4>
      <StoreBadge
     

        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
      />
      
    </div>

    <div >
      <h4 className={styles.fontbold}>KEEP IN TOUCH</h4>
    
      <a href="https://www.facebook.com/myntra">
      <span style={{"fontSize":"20px",}}><AiFillFacebook/></span>
      </a>
      <a href="https://twitter.com/myntra">
      <span style={{"fontSize":"20px",}}><AiOutlineTwitter/></span>
      </a>
      <a href="https://www.youtube.com/user/myntradotcom">
      <span style={{"fontSize":"20px"}}><TiSocialInstagram/></span>
      </a>
      <a href="https://www.instagram.com/myntra/">
      <span style={{"fontSize":"20px"}}><BsYoutube/></span>
      </a>
   
    </div>
    </div>


    <div>
    <div   >
      <img className={styles.imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rAtxy8cZQZgnIqOlVJPgUysLT4GADO2TBg&usqp=CAU" ></img>
      <h4 className={styles.h}>100% ORIGINAL</h4>
      <p className={styles.he}> guarantee for all products at myntra.com</p>
    </div>
    <div>
      <img className={styles.imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHrK67Tk82HKHrOORh5y0IT2q1aex2D8Pkw&usqp=CAU" ></img>
      <h4 className={styles.h}>Return within 30days </h4>
      <p className={styles.he}>of receiving your order</p>
    </div>
    </div>



    <div>
      <h4 className={styles.fontbold}>USEFUL LINKS</h4>
     <p>Blog</p>
     <p>Careers</p>
     <p>Site Map</p>
     <p>Corporate Information</p>
     <p>Whitehat</p>
    </div>



    </div>


<Divider/>
    <div className={styles.popular}>
      <h4 className={styles.fontbold}>POPULAR SEARCHES</h4>
      <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</p>
    </div>


    <div className={styles.reserverd}>
    <div>
      <p>In case of any concern, Contact Us</p>
    </div>
    <div>
      <p>© 2022 www.myntra.com. All rights reserved.</p>
    </div>
    </div>

    <Divider/>
    </div>
  )
}

export default Footer