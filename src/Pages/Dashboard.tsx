
import {useContext} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";

export function Dashboard() {

    const [customers, dispatch] = useContext(CustomerContext);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' +customer.address+''+ customer.email + ' ' + customer.phone}</div>))}
        </>
    );

}




// import {Link} from "react-router";
//
// export function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2><br/>
//             {/*<Link to='/add'>add customer</Link>*/}
//             {/*<Link to='/update'>update customer</Link>*/}
//             {/*<Link to='/delete'>delete customer</Link>*/}
//
//         </div>
//     )
// }
