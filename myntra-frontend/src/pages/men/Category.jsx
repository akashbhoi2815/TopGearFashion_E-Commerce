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
 
    useEffect(() => {
     if(category){
        setSearchParams({categories:category});
     }
    }, [category,setSearchParams])
    


  return (
    
    <Box >
      
       <Box className={categoryStyle.main}>
       <Heading
       style={{
        fontweight: 900,
        textTransform: "uppercase",
        fontSize: "25px",
        clear: "both",
        color: "#282c3f",
        display: "block",
       }}
       >CATEGORIES</Heading>
         <Box>
          <input
            type="checkbox"
            value={"Men's Clothing"}
            defaultChecked={category.includes("Men's Clothing")}
            onChange={handleChange}
          />
          <label>Men's Clothing</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value={"shirt"}
            defaultChecked={category.includes("shirt")}
            onChange={handleChange}
          />
          <label>Shirt</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value={"tshirt"}
            defaultChecked={category.includes("tshirt")}
            onChange={handleChange}
          />
          <label>Tshirt</label>
        </Box>
       </Box>
    </Box>
    
  )
}

export default Category;