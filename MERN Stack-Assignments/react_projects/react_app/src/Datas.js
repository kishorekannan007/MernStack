import Display from "./Display";

function Datas(){
    var name="JD"
    var phno=9566980082
    var native="DPI"
    const ans='Welcome to ${name}'
    return(
        <>
        <h1>GooD AfterNoon, {name}</h1>
        <Display n={name} phno={phno} native={native}/>
        </>
    );
}

export default Datas