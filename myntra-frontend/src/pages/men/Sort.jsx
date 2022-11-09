import { Select } from "@chakra-ui/react";
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
    <div >
       <select name="sortBy" onChange={handleSortBy}>
          <option value="">sortBy</option>
          <option value="asc"  defaultChecked={sortBy === "asc"} >Ascending</option>
          <option value="desc" defaultChecked={sortBy === "desc"} >Descending</option>
      </select> 
    </div>
  );
};

export default Sort;
