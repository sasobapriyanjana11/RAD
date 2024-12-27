import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/add'>Add Customer</Link>
                        <Link to='/delete'>Delete Customer</Link>
                        <Link to='/update'>Update Customer</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}




// import {Link} from "react-router";
// export function Navigation() {
//     return (
//         <>
//             <header>
//                 <ul style={{display: "flex", listStyleType: "none", padding: 0,margin:0}}>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/">Dashboard</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/add-customer">Add Customer</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/delete-customer">Delete Customer</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/update-customer">Update Customer</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/add-item">Add Item</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/delete-item">Delete Item</Link>
//                     </li>
//                     <li style={{margin: "0 15px"}}>
//                         <Link to="/update-item">Update Item</Link>
//                     </li>
//                 </ul>
//             </header>
//         </>
//     )
// }