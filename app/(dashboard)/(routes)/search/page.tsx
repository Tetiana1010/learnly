"use client";

import React, { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const mockResults = ["Result 1", "Result 2", "Result 3"];
    setResults(
      mockResults.filter((result) =>
        result.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 font-sans">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Search Page</h1>
        <div className="w-full max-w-md bg-white p-6 rounded-lg">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="p-3 text-lg mb-4 w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="w-full p-3 text-lg bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </div>
      </div>
      <ul className="list-none p-0 w-full max-w-md mt-6 bg-white rounded-lg shadow-md">
        {results.map((result, index) => (
          <li
            key={index}
            className="p-3 border-b border-gray-200 last:border-none"
          >
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
