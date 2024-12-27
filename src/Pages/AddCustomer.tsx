import { useNavigate } from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../component/Modal";

export function AddCustomer() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, address,email, phone);
        dispatch({type: 'ADD_CUSTOMER', payload: newCustomer});
        navigate('/');
    }
    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setAddress={setAddress} setEmail={setEmail} setPhone={setPhone} >Add Customer</Modal>
        </>
    );
}

// export function AddCustomer() {
//     const navigate = useNavigate();
//     const context = useContext(CustomerContext);
//
//     if (!context) {
//         throw new Error("CustomerContext must be used within a CustomerProvider");
//     }
//
//     const { customers, setCustomers } = context;
//
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//
//     function handleSubmit() {
//         const newCustomer = new Customer(name, address, email, phone);
//         setCustomers([...customers, newCustomer]);
//         navigate("/");
//     }
//
//     return (
//         <div>
//             <header><h2>Add Customer</h2></header>
//             <br/>
//             <input name="Name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
//             <input name="Address" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
//             <input name="Email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
//             <input name="Phone" type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
//             <br/> <br/>
//             <button onClick={handleSubmit}>Add</button>
//             <table border={1} cellPadding="8" style={{marginTop: "20px"}}>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {customers.map((customer) => (
//                     <tr key={customer.email}>
//                         <td>{customer.name}</td>
//                         <td>{customer.address}</td>
//                         <td>{customer.email}</td>
//                         <td>{customer.phone}</td>
//
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }