import React, { createContext, useEffect, useContext } from "react";
import { toast, Flip } from "react-toastify";
import { useQuery } from "react-query";

// Create a context for managing API data
const DataContext = createContext();

// Custom hook to use DataContext
export const useDataContext = () => useContext(DataContext);

// Function to fetch data from an API
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/68f0716a-f132-4ee9-bd90-ef1d46e7270e"
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
  const { data, isLoading, isError, refetch } = useQuery("data", fetchData, {
    refetchInterval: 600000,
    onError: (error) => {
      // Handle error here, and trigger a refetch if needed
      toast.error("Internal server error!", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      refetch(); // This will trigger a refetch if an error occurs
    },
  });

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};
