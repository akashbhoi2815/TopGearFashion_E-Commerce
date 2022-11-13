import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

import menstyle from "./menpage.module.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenData } from "../../redux/appReducer/action";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import Category from "./Category";
import Sort from "./Sort";
import Brand from "./Brand";
import Color from "./Color";
import Price from "./Price";

const WomenPage = () => {
  const dispatch = useDispatch();
  const mendata = useSelector((store) => store.appReducer.mensdata);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const sortBy = searchParams.get("sortBy");

  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }

  useEffect(() => {
    if (location || mendata.length === 0) {
      const queryParams = {
        params: {
          categories: searchParams.getAll("categories"),
          brand: searchParams.getAll("brand"),
          color: searchParams.getAll("color"),
          //   _sort: sortBy && "year",
          //   _order: sortBy,
        },
      };
      dispatch(getMenData(queryParams));
    }
  }, [location.search]);
  console.log(location.search);
  return (
    <Box className={menstyle.container}>
      <Box className={menstyle.sortSection}>
        <Heading
          style={{
            fontweight: 900,
            textTransform: "uppercase",
            fontSize: "25px",
            clear: "both",
            color: "teal",
            display: "block",
          }}
        >
          Filter
        </Heading>
        <Sort />
      </Box>
      <hr />
      <Box className={menstyle.combineSection}>
        <Box className={menstyle.leftSection}>
          <Category />
          <Brand />
          <Color />
          <Price />
        </Box>
        <Box className={menstyle.rightSection}>
          {/* <Grid templateRows="auto" templateColumns="repeat(5, 1fr)" gap={4}> */}
          <Box className={menstyle.mensdata_details}>
            {mendata?.length > 0 &&
              mendata?.map((e) => (
                <GridItem border={"1px hidden"} key={e._id} p="1rem">
                  <Box>
                    <Image minW="100%" src={e.images.image1} alt="" />
                  </Box>
                  <Link to={`/menpage/${e.Idno}`}>
                    <div className={menstyle.brand}>{e.brand}</div>
                    {/* <div className={menstyle.title}>{e.title}</div> */}

                    <div className={menstyle.contact}>
                      <span className={menstyle.title}>{e.title}</span>
                      <span className={menstyle.sizes}>
                        Sizes:
                        {e.sizes.map((size) => (
                          <div key={size.toString()}>
                            {size}
                          </div>
                        ))}
                      </span>
                    </div>
                    <div>
                      <span>Rs.{e.price} </span>
                      <span className={menstyle.off_price}>
                        Rs.{e.off_price}
                      </span>
                      <span className={menstyle.discount}>
                        ({e.discount}% OFF)
                      </span>
                    </div>
                  </Link>
                </GridItem>
              ))}
          </Box>
          {/* </Grid> */}
        </Box>
      </Box>
    </Box>
  );
};

export default WomenPage;
