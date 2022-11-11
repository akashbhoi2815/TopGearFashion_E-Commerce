import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import brandStyle from './filter.module.css'

const BrandFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialBrandParams = searchParams.getAll("brand");
    const [brands, setBrands] = useState(initialBrandParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newBrands = [...brands];
        if(brands.includes(option)){
            newBrands.splice(newBrands.indexOf(option),1);
        }else{
            newBrands.push(option);
        }
        setBrands(newBrands);
    }
  
    useEffect(() => {
     if(brands){
      setSearchParams({ brand: brands});
     }
    }, [brands,setSearchParams])
    


  return (
    
    <Box >
       
       <Box className={brandStyle.main}>
       <Heading>BRAND</Heading>
       <Box>
          <input 
            type="checkbox"
            value={"Roadster"}
            defaultChecked={brands.includes("Roadster")}
            onChange={handleChange}  />
            <label>Roadster</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"HRX"}
            defaultChecked={brands.includes("HRX")}
            onChange={handleChange}  />
            <label>HRX</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Street Armor by Pantaloons"}
            defaultChecked={brands.includes("Street Armor by Pantaloons")}
            onChange={handleChange}  />
            <label>Street Armor by Pantaloons</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"indus route by Pantaloons"}
            defaultChecked={brands.includes("indus route by Pantaloons")}
            onChange={handleChange}  />
            <label>Indus route by Pantaloons</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Celfie Design"}
            defaultChecked={brands.includes("Celfie Design")}
            onChange={handleChange}  />
            <label>Celfie Design</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Mast & Harbour"}
            defaultChecked={brands.includes("Mast & Harbour")}
            onChange={handleChange}  />
            <label>Mast & Harbour</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default BrandFilter