import { Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

import menstyle from "./menpage.module.css";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import Sort from "./Sort";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenData } from "../../redux/appReducer/action";
import { useSearchParams, useLocation, Link } from "react-router-dom";

const MenPage = () => {
   const dispatch = useDispatch();
  const mendata = useSelector((store) => store.appReducer.mensdata);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const sortBy = searchParams.get("sortBy");

  useEffect(() => {
     if(location || mendata.length===0){
           const queryParams = {
             params :{
               brand: searchParams.getAll("brand"),
             //   _sort: sortBy && "year",
             //   _order: sortBy,

             }
           }
    dispatch(getMenData());
     }
  }, [location.search]);
  console.log(location.search)
  return (
    <Box className={menstyle.container}>
      <Box className={menstyle.sortSection}>
        <Sort />
      </Box>
      <Box className={menstyle.combineSection}>
        <Box className={menstyle.leftSection}>
          <CategoryFilter />
          <BrandFilter />
          <PriceFilter />
          <ColorFilter />
        </Box>
        <Box className={menstyle.rightSection}>
         
          <Box className={menstyle.mendata_details}>
            {mendata?.length > 0 &&
            mendata?.map((e) => (
              <Box border={"1px solid red"} key={e._id}>
                <Box>
                  <Image minW="100%" src={e.images.image1} alt="" />
                </Box>
                <Link to={""}>
                  <div>{e.brand}</div>
                  <div>{e.title}</div>
                  <div>{e.price}</div>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenPage;
