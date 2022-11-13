import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import brandStyle from './filter.module.css'

const Brand = () => {
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
            value={"Clovia"}
            defaultChecked={brands.includes("Clovia")}
            onChange={handleChange}  />
            <label>Clovia</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Mast & Harbour"}
            defaultChecked={brands.includes("Mast & Harbour")}
            onChange={handleChange}  />
            <label>Mast & Harbour</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Dressberry"}
            defaultChecked={brands.includes("Dressberry")}
            onChange={handleChange}  />
            <label>Dressberry</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"HERE&NOW"}
            defaultChecked={brands.includes("HERE&NOW")}
            onChange={handleChange}  />
            <label>HERE&NOW</label>
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
            value={"Lakme"}
            defaultChecked={brands.includes("Lakme")}
            onChange={handleChange}  />
            <label>Lakme</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default Brand;