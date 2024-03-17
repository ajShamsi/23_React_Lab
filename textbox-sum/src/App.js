import React, { useState } from 'react';
import './App.css';

function App() {
  const [textboxes, setTextboxes] = useState(['']);
  const [sum, setSum] = useState(0);
  const [error, setError] = useState('');

  const addTextbox = () => {
    setTextboxes([...textboxes, '']);
  };

  const deleteTextbox = (index) => {
    const updatedTextboxes = [...textboxes];
    updatedTextboxes.splice(index, 1);
    setTextboxes(updatedTextboxes);
    recalculateSum(updatedTextboxes);
  };

  const handleChange = (index, value) => {
    // Check if value is a number
    if (!isNaN(value)) {
      const updatedTextboxes = [...textboxes];
      updatedTextboxes[index] = value;
      setTextboxes(updatedTextboxes);
      recalculateSum(updatedTextboxes);
      // Clear the error message
      setError('');
    } else {
      // Display the invalid input directly in the textbox
      setTextboxes((prevTextboxes) => {
        const updatedTextboxes = [...prevTextboxes];
        updatedTextboxes[index] = value;
        return updatedTextboxes;
      });
      // Set the error message
      setError('Please enter a valid number.');
    }
  };
  
  

  const recalculateSum = (updatedTextboxes) => {
    let total = 0;
    updatedTextboxes.forEach((textbox) => {
      total += parseInt(textbox) || 0;
    });
    setSum(total);
  };

  return (
    <div className="App">
      <h1>Textboxes</h1>
      <button className="add-button" onClick={addTextbox}>
        Add Textbox
      </button>
      <div className="textbox-container">
        {textboxes.map((textbox, index) => (
          <div key={index} className="textbox-row">
            <input
              type="text"
              className="textbox"
              value={textbox}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <button className="delete-button" onClick={() => deleteTextbox(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      {error && <p className="error">Error: {error}</p>}
      <h2>Sum: {sum}</h2>
    </div>
  );
  
}

export default App;
