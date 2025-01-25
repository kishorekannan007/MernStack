// const { useState } = require("react");

// export default function Form1() {
//     const [data, setData] = useState({
//         name: '',
//         roll_no: '',
//         city: '',
//         state: ''
//     });
//     function updateData(d)
//     {
//         var variable =d.target.name;
//         var value = d.target.value;
//         console.log("the vari: ",variable,"the val: ",value)
//     }


//     function formSubmit(event) {
//         event.preventDefault();
//         console.log("Success...", data.name, data.roll_no, data.city, data.state);
//     }

//     return (
//         <>
//               <form onSubmit={formSubmit}>
//         Name: <input type="text" name='txtName' onChange={updateData}></input><br/>
//         Roll: <input type="text" name='txtRoll'  onChange={updateData}></input><br/>
//         City: <input type="text" name='txtCity'   onChange={updateData}></input><br/>

//                 <input type="submit" value="signup" />
//             </form>
//         </>
//     );
// }
