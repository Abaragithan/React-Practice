import React from 'react';
import User from './User'


const App = () => {

  const person = {
    name: "abaragithan",
    age: 25,
    email: "abaragithan02@gmail.com",
  }

  return (
    <div>
      App
      <User
        {...person}
      />
    </div>
  )
}

export default App