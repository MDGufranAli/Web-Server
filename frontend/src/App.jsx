import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  console.log('message :', message);

  useEffect(() => {
    // Fetch the message from the backend
    async function fetchMessage() {
      const response = await fetch('http://localhost:3000/');
      console.log(response);
      const data = await response.text();
      console.log(data);
      setMessage(data); // Set the message in the state
      console.log('message :', message);
    }

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
