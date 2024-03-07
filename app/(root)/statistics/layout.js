"use client";

import { DataProvider } from "@/contexts/useDataContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <DataProvider>
      <ToastContainer />
      {children}
    </DataProvider>
  );
}
