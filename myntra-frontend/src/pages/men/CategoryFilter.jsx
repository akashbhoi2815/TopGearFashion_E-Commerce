import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'

const CategoryFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialCategoryParams = searchParams.getAll("");
    const [category, setCategory] = useState(initialCategoryParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newCategory = [...category];
        if(category.includes(option)){
            newCategory.splice(newCategory.indexOf(option),1);
        }else{
            newCategory.push(option);
        }
        setCategory(newCategory);
    }
  
    useEffect(() => {
     if(category){
        const params = {};
        category && (params._ == category);
        setSearchParams(params);
     }
    }, [category,setSearchParams])
    


  return (
    
    <Box >
      
       <Box display={"flex"} flexDir="column" alignItems={"baseline"}>
       <Heading>CATEGORIES</Heading>
       <Box >
          <input 
            type="checkbox"
            value={"Tshirts"}
            // defaultChecked={category.inclueds("Tshirts")}
            onChange={handleChange}  />
            <label>Tshirts</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Lounge Tshirts"}
            // defaultChecked={category.inclueds("Lounge Tshirts")}
            onChange={handleChange}  />
            <label>Lounge Tshirts</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default CategoryFilter