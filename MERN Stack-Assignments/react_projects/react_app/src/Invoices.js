import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Invoices() {
    const {invoiceId} = useParams();
    return (
        <div>
            <h1>Iam from Invoices</h1>
            <nav >
            <div style={{ padding: "20px" }}>
                <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}>
                    <li><Link to="/invoices/41">Gowtham</Link></li>
                    <h>|</h>
                    <li><Link to="/invoices/13">Anbu</Link></li>
                    <h>|</h>
                    <li><Link to="/invoices/56">Kamalesh</Link></li>
                </ul>
            </div>
        </nav>
        <h1> Invoice Id: {invoiceId}</h1>
        </div>
    )
}