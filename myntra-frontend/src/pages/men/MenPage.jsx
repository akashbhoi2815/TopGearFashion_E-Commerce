import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

import menstyle from "./menpage.module.css"
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import Sort from './Sort';

const MenPage = () => {
  return (
    
      <Box className={menstyle.container}>
             <Box className={menstyle.sortSection}>
               <Sort/>
             </Box>
         <Box className={menstyle.combineSection}>
            <Box className={menstyle.leftSection}>
               <CategoryFilter/>
               <BrandFilter/>
               <PriceFilter/>
               <ColorFilter/>
            </Box>
            <Box className={menstyle.rightSection}>

            </Box>
         </Box>
      </Box>
    
  )
}

export default MenPage