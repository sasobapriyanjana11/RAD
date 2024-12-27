import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Modal} from "../component/Modal";
import {Customer} from "../models/Customer";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name,address, email, phone);
        dispatch({type: 'UPDATE_CUSTOMER', payload: updatedCustomer});
        navigate('/');
    }
    return (
        <>
            <header><h2>Update Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setAddress={setAddress} setEmail={setEmail} setPhone={setPhone}>Update Customer</Modal>
        </>
    );
}


//
//
// import { useNavigate } from "react-router";
// import { useContext, useState } from "react";
// import {CustomerContext} from "../store/CustomerProvider.tsx";
// import {Customer} from "../models/Customer.ts";
//
//
// export function UpdateCustomer() {
//     const navigate = useNavigate();
//     const context = useContext(CustomerContext);
//
//     if (!context) {
//         throw new Error("CustomerContext must be used within a CustomerProvider");
//     }
//     const {customers, setCustomers} = context;
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//
//     function handleRowClick(customer: Customer) {
//         setName(customer.name);
//         setAddress(customer.address);
//         setEmail(customer.email);
//         setPhone(customer.phone);
//         setEmail(customer.email);
//     }
//
//     // Function to update the customer
//     function handleUpdateCustomer() {
//         const newCustomers = customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer);
//         setCustomers(newCustomers);
//         navigate("/" );
//     }
//
//     return (
//         <div>
//             <h2>Update Customer</h2>
//             <br />
//             <input name="Name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
//             <input name="Address" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
//             <input name="Email" type="text" placeholder="Email" value={email}/>
//             <input name="Phone" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
//             <br /> <br/>
//             <button onClick={handleUpdateCustomer}  >Update</button>
//             <br />
//             <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Actions</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {customers.map((customer) => (
//                     <tr>
//                         <td>{customer.name}</td>
//                         <td>{customer.address}</td>
//                         <td>{customer.email}</td>
//                         <td>{customer.phone}</td>
//                         <td>
//                             <button onClick={() => handleRowClick(customer)}>Edit</button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }