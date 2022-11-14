import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

const data8 = () => {
  return fetch("https://topgearfashion.onrender.com/tgf/homeslider1data");
};

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const [data18, setData18] = useState([]);

  useEffect(() => {
    data8()
      .then((res) => res.json())
      .then((res) => {
        setData18(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Slider {...settings} >
      {data18.map((ele) => (
        <div>
          <img className={styles.div18} src={ele.image} />
        </div>
      ))}
    </Slider>
  );
};
