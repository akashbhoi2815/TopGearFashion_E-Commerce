import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

import menstyle from "./menpage.module.css";

import React, { useEffect } from "react";
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
      <Box className={menstyle.sortSection}><Sort /></Box>
      <Box className={menstyle.combineSection}>
        <Box className={menstyle.leftSection}>
          <Category />
          <Brand />
          <Color />
          <Price />
        </Box>
        <Box className={menstyle.rightSection}>
          <Grid templateRows="auto" templateColumns="repeat(5, 1fr)" gap={4}>
            {mendata?.length > 0 &&
              mendata?.map((e) => (
                <GridItem border={"1px hidden"} key={e._id}>
                  <Box>
                    <Image minW="100%" src={e.images.image1} alt="" />
                  </Box>
                  <Link to={`/menpage/${e.Idno}`}>
                    <div>{e.brand}</div>
                    <div>{e.title}</div>
                    <div>{e.price}</div>
                  </Link>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WomenPage;
