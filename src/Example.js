import React, { useState, useEffect } from 'react';

function Example() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You have written ${count} hooks`;
	});

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