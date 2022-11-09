import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
/**
 * 
 *  Rs. 149 to Rs. 2612(78378)
Rs. 2612 to Rs. 5075(1694)
Rs. 5075 to Rs. 7538(80)
Rs. 7538 to Rs. 10001(17
 */

const PriceFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialPriceParams = searchParams.getAll("");
    const [price, setPrice] = useState(initialPriceParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newPrice = [...price];
        if(price.includes(option)){
            newPrice.splice(newPrice.indexOf(option),1);
        }else{
            newPrice.push(option);
        }
        setPrice(newPrice);
    }
  
    useEffect(() => {
     if(price){
        const params = {};
        price && (params._ == price);
        setSearchParams(params);
     }
    }, [price,setSearchParams])
    


  return (
    
    <Box>
       
       <Box display={"flex"} flexDir="column" alignItems={"baseline"}>
       <Heading>PRICE</Heading>
       <Box>
          <input 
            type="checkbox"
            value={`Rs.${149} to Rs.${2612}`}
            // defaultChecked={price.inclueds("Rs. 149 to Rs. 2612")}
            onChange={handleChange}  />
            <label>Rs. 149 to Rs. 2612</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={`Rs.${2612} to Rs.${5075}`}
            // defaultChecked={price.inclueds(`Rs.${2612} to Rs.${5075}`)}
            onChange={handleChange}  />
            <label>Rs. 2612 to Rs. 5075</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={`Rs.${5075} to Rs.${7538}`}
            // defaultChecked={price.inclueds(`Rs.${5075} to Rs.${7538}`)}
            onChange={handleChange}  />
            <label>Rs. 5075 to Rs. 7538</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={`Rs.${7538} to Rs.${10001}`}
            // defaultChecked={price.inclueds(`Rs.${7538} to Rs.${10001}`)}
            onChange={handleChange}  />
            <label>Rs. 7538 to Rs. 10001</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default PriceFilter;