import React, { useState, useEffect } from "react";

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You have written ${count} hooks`;
  }, [count]);

  return (
    <div>
      <p>You have written {count} hooks</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example;
