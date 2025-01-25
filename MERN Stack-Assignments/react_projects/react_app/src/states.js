import { useState } from "react";

export default function States() {
  const [data, setdata] = useState({
    clr: "afternoon",
    Msg: "",
  });

  const [arr, setarr] = useState([1, 'sai', 3.5, 2, 3]);


  const sum = arr
    .map(item => (typeof item === 'number' ? item : 0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      <h1>Good {data.clr}</h1>
      <h2>{data.Msg}</h2>
      <button onClick={() => {
        setdata({
          clr: "Evening",
          Msg: "Nanba"
        });
      }}>Click Here</button>
      
      <h2>Array: {arr.join(', ')}</h2>
      <h3>Sum: {sum}</h3>
      
      <button onClick={() => {
        setarr(arr.map(num => (typeof num === 'number' ? num + 10 : num)))
      }}>Click me to add 10</button>
    </>
  );
}