import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState(null);
 
  useEffect(async () => {
    const result = await axios(
      'https://official-joke-api.appspot.com/random_joke',
    );
 
    setData(result.data);
  }, []);
 console.log({data})
  return (
<h1>{data.setup}</h1>
  );
}
 
export default App