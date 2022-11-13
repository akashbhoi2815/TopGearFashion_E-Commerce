import { Box, Heading } from '@chakra-ui/react';
import React from "react";
import priceStyle from './filter.module.css'
const Price = () => {
  

  return (
    
    <Box>
       
       <Box className={priceStyle.main}>
       <Heading
       style={{
        fontweight: 900,
        textTransform: "uppercase",
        fontSize: "25px",
        clear: "both",
        color: "#282c3f",
        display: "block",
       }}
       >PRICE</Heading>
       <Box>
          <input 
            type="checkbox"/>
            <label>Rs. 149 to Rs. 2612</label>
       </Box>
       <Box>
          <input 
            type="checkbox"/>
            <label>Rs. 2612 to Rs. 5075</label>
       </Box>
       <Box>
          <input 
            type="checkbox"/>
            <label>Rs. 5075 to Rs. 7538</label>
       </Box>
       <Box>
          <input 
            type="checkbox"/>
            <label>Rs. 7538 to Rs. 10001</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default Price;