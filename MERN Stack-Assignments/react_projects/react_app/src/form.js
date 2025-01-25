import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, rollNumber, gender, city, phone);
        alert("Form submitted successfully!");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                Roll Number: <input type="text" placeholder="Enter your roll number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                <br />
                Gender: 
                <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male
                <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female
                <br />
                City: <input type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />
                <br />
                Phone Number: <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>

            <div>
                <p>Name: {name}</p>
                <p>Roll Number: {rollNumber}</p>
                <p>Gender: {gender}</p>
                <p>City: {city}</p>
                <p>Phone Number: {phone}</p>
            </div>
        </>
    );
}