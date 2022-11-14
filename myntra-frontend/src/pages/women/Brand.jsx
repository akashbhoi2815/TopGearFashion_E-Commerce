import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import brandStyle from './filter.module.css'

const Brand = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialBrandParams = searchParams.getAll("brand");
    const [brand, setBrands] = useState(initialBrandParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newBrands = [...brand];
        if(brand.includes(option)){
            newBrands.splice(newBrands.indexOf(option),1);
        }else{
            newBrands.push(option);
        }
        setBrands(newBrands);
    }
  
    useEffect(() => {
     if(brand){
      setSearchParams({ brand: brand});
     }
    }, [brand,setSearchParams])
    


  return (
    
    <Box >
       
       <Box className={brandStyle.main}>
       <Heading style={{
        fontweight: 900,
        textTransform: "uppercase",
        fontSize: "25px",
        clear: "both",
        color: "#282c3f",
        display: "block",
       }}>BRAND</Heading>
       <Box>
          <input 
            type="checkbox"
            value={"Clovia"}
            defaultChecked={brand.includes("Clovia")}
            onChange={handleChange}  />
            <label>Clovia</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Mast & Harbour"}
            defaultChecked={brand.includes("Mast & Harbour")}
            onChange={handleChange}  />
            <label>Mast & Harbour</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Dressberry"}
            defaultChecked={brand.includes("Dressberry")}
            onChange={handleChange}  />
            <label>Dressberry</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"HERE&NOW"}
            defaultChecked={brand.includes("HERE&NOW")}
            onChange={handleChange}  />
            <label>HERE&NOW</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Celfie Design"}
            defaultChecked={brand.includes("Celfie Design")}
            onChange={handleChange}  />
            <label>Celfie Design</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Lakme"}
            defaultChecked={brand.includes("Lakme")}
            onChange={handleChange}  />
            <label>Lakme</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default Brand;