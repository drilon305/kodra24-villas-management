"use client"

import { useState } from "react"
import Search from "../Search/Search"


const PageSearch = () => {
  const [villaTypeFilter, setVillaTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Search
      villaTypeFilter={villaTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setVillaTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default PageSearch;