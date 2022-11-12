import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import categoryStyle from './filter.module.css'

const Category = () => {
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
        setSearchParams({categories:category});
     }
    }, [category,setSearchParams])
    


  return (
    
    <Box >
      
       <Box className={categoryStyle.main}>
       <Heading>CATEGORIES</Heading>
       <Box >
          <input 
            type="checkbox"
            value={"beautycare"}
            defaultChecked={category.includes("beautycare")}
            onChange={handleChange}  />
            <label>Beautycare</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"tops"}
            defaultChecked={category.includes("tops")}
            onChange={handleChange}  />
            <label>Tops</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"tshirt"}
            defaultChecked={category.includes("tshirt")}
            onChange={handleChange}  />
            <label>Tshirt</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"dresses"}
            defaultChecked={category.includes("dresses")}
            onChange={handleChange}  />
            <label>Dresses</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default Category;