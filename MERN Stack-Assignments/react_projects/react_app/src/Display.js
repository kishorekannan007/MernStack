function Display(values){

    const {n,phno,native}=values

    
    return(
        <>
        <h2>Welcome to LeoDas App</h2>
        <h3>Profile</h3>
        <h4>Name        : {n}</h4>
        <h4>Phone Number: {phno}</h4>
        <h4>Native      : {native}</h4>
       
        </>
    );
}

export default Display