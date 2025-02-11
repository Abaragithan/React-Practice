import React, { useEffect, useState } from 'react';
import User from './User'


const App = () => {

  // const person = {
  //   name: "abaragithan",
  //   age: 25,
  //   email: "abaragithan02@gmail.com",
  // }
  const [num1, setNum1] = useState(100);

  useEffect(() => {
    setNum1(200);
    console.log('from useEffect');

    return () => {
      setNum1(null);
      console.log('memory cleared');

    }

  }, [num1]);

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1(num1 + 1)}>Add</button>

    </div>
  )
}

export default App