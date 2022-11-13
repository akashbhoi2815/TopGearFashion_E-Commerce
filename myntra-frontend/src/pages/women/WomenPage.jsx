import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

import womenstyle from "./women.module.css";



import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getwomenData } from "../../redux/appReducer/action";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import Category from "./Category";
import Sort from "./Sort";
import Brand from "./Brand";
import Color from "./Color";
import Price from "./Price";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

    <>
    <Navbar/>
    
    <Box className={womenstyle.container}>
      <Box className={womenstyle.sortSection}><Heading
       style={{
        fontweight: 900,
        textTransform: "uppercase",
        fontSize: "25px",
        clear: "both",
        color: "teal",
        display: "block",
       }}
      >Filter</Heading><Sort /></Box>
      <Box className={womenstyle.combineSection}>
        <Box className={womenstyle.leftSection}>
          <Category/>
          <Brand/>
          <Color/>
          <Price/>
          
        </Box>
        <Box className={womenstyle.rightSection}>
         
          {/* <Grid 
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
          </Grid> */}
          <Box className={womenstyle.rightSection}>
         
            <Box className={womenstyle.mensdata_details}>
            {womendata?.length > 0 &&
              womendata?.map((e) => (
                <GridItem border={"1px hidden"} key={e._id} p="1rem">
                  <Box>
                    <Image minW="100%" src={e.images.image1} alt="" />
                  </Box>
                  <Link to={`/menpage/${e.Idno}`} >
                    <div className={womenstyle.brand}>{e.brand}</div>
                    <div className={womenstyle.title}>{e.title}</div>
                    <div >
                    <span >Rs. {e.price} </span>
                    <span className={womenstyle.off_price}> Rs. {e.off_price}</span>
                    <span className={womenstyle.discount}> ({e.discount}% OFF)</span>
                  </div>
                  </Link>
                </GridItem>
              ))}
              </Box>
         
        </Box>
        </Box>
      </Box>
    </Box>
<Footer/>
    </>
  );
};

export default WomenPage;
