"use client";
import { useEffect } from "react";
import LoadingSkeleton from "../_portfolioComponents/LoadingSkeleton";

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
    }, 5000);
  }, []);
  const array = new Array(6).fill(null);
  return (
    <div className="portfolio-grid py-10 w-11/12 md:w-10/12 mx-auto">
      {array.map((arr, index) => (
        <LoadingSkeleton key={index} {...arr} />
      ))}
    </div>
  );
}
