import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'

const ColorFilter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialColorParams = searchParams.getAll("");
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
        color && (params._ == color);
        setSearchParams(params);
     }
    }, [color,setSearchParams])
    


  return (
    
    <Box >
       
       <Box display={"flex"} flexDir="column" alignItems={"baseline"}>
       <Heading>COLOR</Heading>
       <Box>
          <input 
            type="checkbox"
            value={"Black"}
            // defaultChecked={color.inclueds("Black")}
            onChange={handleChange}  />
            <label>Black</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Blue"}
            // defaultChecked={color.inclueds("Blue")}
            onChange={handleChange}  />
            <label>Blue</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"White"}
            // defaultChecked={color.inclueds("White")}
            onChange={handleChange}  />
            <label>White</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Navy Blue"}
            // defaultChecked={color.inclueds("Navy Blue")}
            onChange={handleChange}  />
            <label>Navy Blue</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Green"}
            // defaultChecked={color.inclueds("Green")}
            onChange={handleChange}  />
            <label>Green</label>
       </Box>
       <Box>
          <input 
            type="checkbox"
            value={"Red"}
            // defaultChecked={color.inclueds("Red")}
            onChange={handleChange}  />
            <label>Red</label>
       </Box>
       </Box>
    </Box>
    
  )
}

export default ColorFilter;