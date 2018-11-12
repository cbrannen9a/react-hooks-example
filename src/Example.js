import React, { useState } from 'react';

function Example() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You have written {count} hooks</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
      </button>
		</div>
	);
}

export default Example;