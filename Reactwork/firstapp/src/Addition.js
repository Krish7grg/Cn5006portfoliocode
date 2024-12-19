import './App.css';
import React, { useState } from 'react';

// Define the GreetingElementwithProp component
function Addn(props) {
  // State to hold the sum
  const [sum, setSum] = useState(0);

  // Function to handle addition of two numbers
  const handleAdd = () => {
    const total = props.num1 + props.num2; // Add the two numbers
    setSum(total); // Update the sum state
  };

  return (
    <div className="App">
      <h1>Welcome, {props.studentname}</h1>
      <button onClick={handleAdd}>Add Numbers</button>
      <h2>Sum: {sum}</h2> {/* Display the sum */}
    </div>
  );
}

// Correctly export the function
export default Addn;