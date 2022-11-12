import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import colorStyle from './filter.module.css'
const Color = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialColorParams = searchParams.getAll("color");
    const [color, setColor] = useState(initialColorParams || []);

    const handleChange = (e) => {
        const option = e.target.value;
        let newColor = [...color];
        if(color.includes(option)){
            newColor.splice(newColor.indexOf(option),1);
        }else{
            newColor.push(option);
        }
        setColor(newColor);
    }
  
    useEffect(() => {
     if(color){
        const params = {};
        color && (params.color = color);
        setSearchParams(params);
     }
    }, [color,setSearchParams])
    


  return (
    
    <Box >
       
       <Box className={colorStyle.main}>
       <Heading>COLOR</Heading>
       <Box>
          <input 
            type="checkbox"
            value={"black"}
            defaultChecked={color.includes("black")}
            onChange={handleChange}  />
            <label>Black</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"pink"}
            defaultChecked={color.includes("pink")}
            onChange={handleChange}  />
            <label>Pink</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"white"}
            defaultChecked={color.includes("white")}
            onChange={handleChange}  />
            <label>White</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"blue"}
            defaultChecked={color.includes("blue")}
            onChange={handleChange}  />
            <label>Blue</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"yellow"}
            defaultChecked={color.includes("yellow")}
            onChange={handleChange}  />
            <label>Yellow</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"red"}
            defaultChecked={color.includes("red")}
            onChange={handleChange}  />
            <label>Red</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default Color;