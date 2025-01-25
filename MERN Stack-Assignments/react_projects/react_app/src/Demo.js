import { useReducer } from "react"
export default function Demo(){
    const transactionReducer = (balance,action)=>{
        switch(action.type){
            case "deposit":
                return balance + action.payload;
            case "withdraw":
                return balance - action.payload;
            default:
                return balance
        }
    }
    const withdraw = (amount)=>{
        dispatch({type:"withdraw",payload:1000})
    }
    const deposit = (amount)=>{
        dispatch({type:"deposit",payload:1500})
    }
    const [balance,dispatch] = useReducer(transactionReducer,0)
    return (
        <>
            <h1>Balance is {balance}</h1>
            <button onClick={withdraw}>Withdraw</button>
            <button onClick={deposit}>Deposit</button>
            </>
    )
}