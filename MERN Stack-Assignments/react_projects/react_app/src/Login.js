import { useNavigate} from "react-router-dom";
export default function Login() {
        const navigation = useNavigate();
        function Dashboard(){
            navigation("/Dashboard")
        }
        return(
            <>
            <h1>Login Page</h1>
            <button onClick={()=>Dashboard()}>Go to dashboard</button>
            </>
        )
}