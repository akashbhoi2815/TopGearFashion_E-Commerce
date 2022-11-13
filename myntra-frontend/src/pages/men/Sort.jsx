import { Box, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSortParams = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initialSortParams || "");


  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (sortBy) {
      const params = {};
      sortBy && (params.sortBy = sortBy)
      setSearchParams(params)
    }
  }, [setSearchParams, sortBy]);


  return (
    <Box >
       <Select name="sortBy" onChange={handleSortBy}>
          <option value="">SortBy:Default</option>
          <option value="asc"  defaultChecked={sortBy === "asc"} >Price: Low to High</option>
          <option value="desc" defaultChecked={sortBy === "desc"} >Price: High to Low</option>
      </Select> 
    </Box>
  );
};

export default Sort;
