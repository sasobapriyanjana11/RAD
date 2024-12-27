
import {useContext} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";

export function Dashboard() {

    const [customers, dispatch_1] = useContext(CustomerContext);
    const[items,dispatch]=useContext(ItemContext);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' +customer.address+''+ customer.email + ' ' + customer.phone}</div>))}

            {items.map((item: Item) => (
                <div key={item.code}>{item.code + ' ' +item.name+''+ item.price + ' ' + item.quantity}</div>))}
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
