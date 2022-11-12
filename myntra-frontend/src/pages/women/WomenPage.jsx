import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

import womenstyle from "./women.module.css";



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getwomenData } from "../../redux/appReducer/action";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import Category from "./Category";
import Sort from "./Sort";
import Brand from "../men/Brand";
import Color from "./Color";
import Price from "./Price";

const WomenPage = () => {
   const dispatch = useDispatch();
  const womendata = useSelector((store) => store.appReducer.womensdata);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const sortBy = searchParams.get("sortBy");

  useEffect(() => {
     if(location || womendata.length===0){
           const queryParams = {
             params :{
              categories: searchParams.getAll("categories"),
              brand: searchParams.getAll("brand"),
              color: searchParams.getAll("color"),
               _sort: sortBy && "price",
               _order: sortBy,

             }
           }
    dispatch(getwomenData(queryParams));
     }
  }, [location.search]);
  console.log(location.search)
  return (
    <Box className={womenstyle.container}>
      <Box className={womenstyle.sortSection}>
        <Sort />
      </Box>
      <Box className={womenstyle.combineSection}>
        <Box className={womenstyle.leftSection}>
          <Category/>
          <Brand/>
          <Color/>
          <Price/>
          
        </Box>
        <Box className={womenstyle.rightSection}>
         
          <Grid 
           templateRows='auto'
           templateColumns='repeat(5, 1fr)'
           gap={4}>
            {womendata?.length > 0 &&
            womendata?.map((e) => (
              <GridItem p="1rem"  border={"1px hidden red"} key={e._id}>
                <Box>
                  <Image minW="100%" src={e.images.image1} alt="" />
                </Box>
                <Link to={`/womenpage/${e.Idno}`}>
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
