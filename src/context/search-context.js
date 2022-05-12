import React, { createContext, useContext } from "react";

const SearchContext = createContext({});

const SearchProvider = () => {
  const searchByKeyword = () => {
    console.log("searching...");
  };

  const SearchContextValue = {
    searchByKeyword,
  };

  return <SearchContext.Provider value={SearchContextValue} {...props} />;
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
