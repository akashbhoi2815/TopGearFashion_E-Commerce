import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import categoryStyle from './filter.module.css'

const CategoryFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialCategoryParams = searchParams.getAll("categories");
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
  console.log('category: ', category);
    useEffect(() => {
     if(category){
        const params = {};
        category && (params.categories = category);
        setSearchParams(params);
     }
    }, [category,setSearchParams])
    


  return (
    
    <Box >
      
       <Box className={categoryStyle.main}>
       <Heading>CATEGORIES</Heading>
       <Box >
          <input 
            type="checkbox"
            value={"tshirt"}
            defaultChecked={category.includes("tshirt")}
            onChange={handleChange}  />
            <label>Tshirts</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Lounge Tshirts"}
            defaultChecked={category.includes("Lounge Tshirts")}
            onChange={handleChange}  />
            <label>Lounge Tshirts</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default CategoryFilter