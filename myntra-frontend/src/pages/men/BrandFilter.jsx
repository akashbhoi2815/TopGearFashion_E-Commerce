import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'

const BrandFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialBrandParams = searchParams.getAll("");
    const [brand, setBrand] = useState(initialBrandParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newBrand = [...brand];
        if(brand.includes(option)){
            newBrand.splice(newBrand.indexOf(option),1);
        }else{
            newBrand.push(option);
        }
        setBrand(newBrand);
    }
  
    useEffect(() => {
     if(brand){
        const params = {};
        brand && (params._ == brand);
        setSearchParams(params);
     }
    }, [brand,setSearchParams])
    


  return (
    
    <Box >
       
       <Box display={"flex"} flexDir="column" alignItems={"baseline"}>
       <Heading>BRAND</Heading>
       <Box>
          <input 
            type="checkbox"
            value={"Roadster"}
            // defaultChecked={brand.inclueds("Roadster")}
            onChange={handleChange}  />
            <label>Roadster</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Puma"}
            // defaultChecked={brand.inclueds("Puma")}
            onChange={handleChange}  />
            <label>Puma</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"WROGN"}
            // defaultChecked={brand.inclueds("WROGN")}
            onChange={handleChange}  />
            <label>WROGN</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"max"}
            // defaultChecked={brand.inclueds("max")}
            onChange={handleChange}  />
            <label>max</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"U.S. Polo Assn."}
            // defaultChecked={brand.inclueds("U.S. Polo Assn.")}
            onChange={handleChange}  />
            <label>U.S. Polo Assn.</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Friskers"}
            // defaultChecked={brand.inclueds("Friskers")}
            onChange={handleChange}  />
            <label>Friskers</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default BrandFilter