import React, { useState } from 'react';
import User from './User'


const App = () => {

  // const person = {
  //   name: "abaragithan",
  //   age: 25,
  //   email: "abaragithan02@gmail.com",
  // }

  const [num, setNum] = useState(1);

  const clickEvent = () => {
    setNum(num + 1);
    console.log(num);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={clickEvent}>Add</button>

    </div>
  )
}

export default App