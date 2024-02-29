import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context for managing API data
const DataContext = createContext();

// Custom hook to use DataContext
export const useDataContext = () => useContext(DataContext);

// Component to provide data through context
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState("home");

  // Function to fetch data from an API
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/539a76a7-e086-45c8-8fb1-e584db6f48e0"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error, page, setPage }}>
      {children}
    </DataContext.Provider>
  );
};