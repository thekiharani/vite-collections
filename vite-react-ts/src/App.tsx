import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 10) return;
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white p-6 rounded-lg text-center max-w-xs shadow-lg">
        <p className="text-gray-600 mb-2 text-xl font-semibold">Count from 0 10 10</p>
        <button
          className="bg-red-600 text-gray-200 px-4 py-2 rounded-l-full text-2xl font-bold disabled:cursor-not-allowed disabled:opacity-50"
          onClick={decrement}
          disabled={count <= 0}
        >
          -
        </button>
        <button className="bg-gray-600 text-gray-200 px-4 py-2 text-2xl font-bold">
          {count}
        </button>
        <button
          className="bg-blue-600 text-gray-200 px-4 py-2 rounded-r-full text-2xl font-bold disabled:cursor-not-allowed disabled:opacity-50"
          onClick={increment}
          disabled={count >= 10}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
