import { react, useState, useRef, useEffect } from 'react'


const App = () => {

   const [input, setInput] = useState("");
   const inputRef = useRef();
   useEffect(() => {
      inputRef.current = input;
   }, [input]);
   console.log("getting renderd");


   const display = () => {
      console.log(inputRef.current);
   }

   return (
      <div>
         <h1>input </h1>
         <input
            type="text"
            value={input}
            onChange={(event) => { setInput(event.target.value) }}
            ref={inputRef}
         />
         <p>input : {input}</p>
         <p>input : {inputRef.current}</p>
         <button onClick={display}>show input</button>



      </div>
   )
}

export default App