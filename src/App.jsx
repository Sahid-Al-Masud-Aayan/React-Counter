import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start the interval to count up to 300 at 2ms intervals
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 400) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 2);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-sky-300 flex justify-center flex-col gap-5 items-center">
      <h1 className='font-semibold text-4xl tracking-tighter italic'>It is fully made by React Components with Chat-GPT instead of plugins</h1>
      <div className="">
        <Counter />
      </div>
    </div>
  );
}

export default App;
