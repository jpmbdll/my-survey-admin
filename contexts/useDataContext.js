import React, { createContext, useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";

// Create a context for managing API data
const DataContext = createContext();

// Custom hook to use DataContext
export const useDataContext = () => useContext(DataContext);

// Function to fetch data from an API
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/c7eccd1c-ad75-44fc-b3e3-de5d0a9787b9"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

// Component to provide data through context
export const DataProvider = ({ children }) => {
  const { data, isLoading, isError } = useQuery("data", fetchData);
  const [page, setPage] = useState("home");

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, isError, page, setPage }}>
      {children}
    </DataContext.Provider>
  );
};
