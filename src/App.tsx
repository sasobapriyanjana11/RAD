
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./Pages/Dashboard.tsx";
import {AddCustomer} from "./Pages/AddCustomer.tsx";
import {UpdateCustomer} from "./Pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./Pages/DeleteCustomer.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {AddItem} from "./Pages/AddItem.tsx";
import {UpdateItem} from "./Pages/UpdateItem.tsx";
import {DeleteItem} from "./Pages/DeleteItem.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";
import {useDispatch, useSelector} from "react-redux";
import { Store } from './store/Store.ts';
function App() {
    const count=useSelector((state: number) => state);

    const dispatch=useDispatch();


    return (
        <>
            {count}
            <br/>
            <button onClick={() => dispatch({type:'INCREMENT',payload:1})}>INCREMENT</button>
            <button onClick={() => dispatch({type:'DECREMENT',payload:1})}>DECREMENT</button>
            <button onClick={() => dispatch({type:'TOGGLE',payload:1})}>TOGGLE</button>

        </>
    );
}

export default App


// import './App.css'
// import {Languages} from "./component/Languages.tsx";
// import {ChangeEvent, ReactNode, useState} from "react";
// import ButtonComponent from "./component/ButtonComponent.tsx";
// import {Customer} from "./models/Customer.ts";
// import {createBrowserRouter} from "react-router";
// import {Dashboard} from "./Pages/Dashboard.tsx";
// import {RouterProvider} from "react-router/dom";
// import {AddCustomer} from "./Pages/AddCustomer.tsx";
// import {Error} from "./component/Error.tsx";
// import {UpdateCustomer} from "./Pages/UpdateCustomer.tsx";
// import {DeleteCustomer} from "./Pages/DeleteCustomer.tsx";
// import {Navigation} from "./component/Navigation.tsx";
// import {RootLayout} from "./component/RootLayout.tsx";
// import {CustomerProvider} from "./store/CustomerProvider.tsx";
// import {AddItem} from "./Pages/AddItem.tsx";
// import {UpdateItem} from "./Pages/UpdateItem.tsx";
// import {DeleteItem} from "./Pages/DeleteItem.tsx";
// import {ItemProvider} from "./store/ItemProvider.tsx";
// // import React, { useReducer } from "react";
//
// function App() {
//     const routes = createBrowserRouter([
//         {
//             path: "/",
//             element: <RootLayout />,
//             children: [
//                 { path: "/", element: <Dashboard /> },
//                 { path: "/add-customer", element: <AddCustomer /> },
//                 { path: "/update-customer", element: <UpdateCustomer /> },
//                 { path: "/delete-customer", element: <DeleteCustomer /> },
//                 { path: "/add-item", element: <AddItem /> }, // Added route for adding an item
//                 { path: "/update-item", element: <UpdateItem /> }, // Added route for updating an item
//                 { path: "/delete-item", element: <DeleteItem /> }, // Added route for deleting an item
//             ],
//             errorElement: <Error />,
//         },
//         {
//             path: "*",
//             element: <Error />,
//         },
//     ]);
//
//     return (
//         <ItemProvider>
//             <CustomerProvider>
//                 <RouterProvider router={routes} />
//             </CustomerProvider>
//         </ItemProvider>
//     );
//
// }
//
// export default App;











//1
{/*<ButtonComponent name='ADD'></ButtonComponent>*/
}
{/*<ButtonComponent name='Delete'></ButtonComponent>*/
}
{/*<ButtonComponent name='Update'></ButtonComponent>*/}
{/*<SmallButtonComponent></SmallButtonComponent>*/}

//2
// const itemList=[
//     {
//         title:'Apple',
//         description:'hiii'
//     },
//     {
//         title:'Mango',
//         description:'byrrr'
//     },
//     {
//         title:'Grapes',
//         description:''
//     }]

{/*<ItemComponent title={itemList[0].title} description={itemList[0].description}/>*/}
{/*<ItemComponent title={itemList[1].title} description={itemList[1].description}/>*/}
{/*<ItemComponent title={itemList[2].title} description={itemList[2].description}/>*/}


// 3)
// const itemArray = [];
// for (const item of itemList) {
//
//     itemArray.push(<ItemComponent title={item.title} description={item.description}/>)
// }
//
// return (
//     <>
//         {itemArray}
//
//     </>
// )

// 4)
//  let content;
//     if (isLogedIn) {
//             content=<Dashboard/>
//     }else{
//         content=<Login/>
//     }
//         return (
//             <>
//                 {content}
//
//             </>
//         )

// return (
//             <>
//             <ButtonComponent>Click me</ButtonComponent>
//             <ButtonComponent>Click me 1</ButtonComponent>
//             </>
//         )


// 5)
// const subjectArray=[];
//   for(const item of Subjects){
//       subjectArray.push(<Subject subject={item.subject} description={item.description}/>);
//   }
//         return (
//             <>
//                 {subjectArray}
//             </>
//         )


//6)

// const handleClick = (name:string) => {
//     alert(name+' clicked !')
// }
// return (
//     <>
//         <ButtonComponent onSelect={handleClick}>button A</ButtonComponent>
//         <ButtonComponent onSelect={handleClick}>button B</ButtonComponent>
//
//     </>
// )
// }


//7)
// function App() {
//
//     const handleClick = (name:string) => {
//         let desc;
//         languages.map((languages)=>{
//             if(languages.sName===name){
//                 desc=languages.sDescription;
//             }
//
//         })
//         alert(desc)
//     }
//      const languages = [
//         {
//             sName:'RAD',
//             sDescription:'lorem ipsum dolor sit amet RAD',
//         },
//         {
//             sName:'JS',
//             sDescription:'lorem ipsum dolor sit amet JS',
//         },
//         {
//             sName:'TS',
//             sDescription:'lorem ipsum dolor sit amet TS',
//         }
//     ]
//
//     return (
//             <>
//                 <Languages onClickLanguages={handleClick}>{languages[0].sName}</Languages>
//                 <Languages onClickLanguages={handleClick}>{languages[1].sName}</Languages>
//                 <Languages onClickLanguages={handleClick}>{languages[2].sName}</Languages>
//
//             </>
//         )
// }

//8)
// function App() {
//     // let content="default";
//
//     const[content, setContent] = useState("default");
//     const handleClick = (name:string) => {
//         let desc;
//         languages.map((languages)=>{
//             if(languages.sName===name){
//                 desc=languages.sDescription;
//             }
//
//         })
//         setContent(name);
//         alert(desc)
//     }
//      const languages = [
//         {
//             sName:'RAD',
//             sDescription:'lorem ipsum dolor sit amet RAD',
//         },
//         {
//             sName:'JS',
//             sDescription:'lorem ipsum dolor sit amet JS',
//         },
//         {
//             sName:'TS',
//             sDescription:'lorem ipsum dolor sit amet TS',
//         }
//     ]
//
//     return (
//             <>
//                 <Languages onClickLanguages={handleClick}>{languages[0].sName}</Languages>
//                 <Languages onClickLanguages={handleClick}>{languages[1].sName}</Languages>
//                 <Languages onClickLanguages={handleClick}>{languages[2].sName}</Languages>
//                 <Languages onClickLanguages={handleClick}>{content}</Languages>
//
//             </>
//         )
// }

//8)
// function App() {
//
//     const[content, setContent] = useState(0);
//
//
//
//     return (
//         <>
//             {content}<br/>
//             <button onClick={() => {
//                 setContent(content + 1)
//             }}>Add
//             </button>
//             <button onClick={() => {
//                 setContent(content - 1)
//             }}>Sub
//             </button>
//         </>
//     )
// }




//
// const[count, setCount] = useState(0);
// <>
//             {count}<br/>
//             <ButtonComponent count={count} setCount={setCount}>Add</ButtonComponent>
//             <ButtonComponent count={count} setCount={setCount}>Sub</ButtonComponent>
//         </>

//
// function App() {
//
//     const[userData, setUserData]=useState({
//             firstName:"",
//             lastName:""
//     }
//     )
//
//     function handleEvents(event:ChangeEvent<HTMLInputElement>){
//         const{name,value} = event.target;
//         setUserData({
//             ...userData,
//             [name]:value
//         })
//     }
//
//     function handleButton() {
//
//     }
//
//     return (
//         <>
//             <input name='firstName' type="text" placeholder='first Name' onChange={handleEvents}/>
//             <input name='lastName' type="text" placeholder='last Name' onChange={handleEvents}/>
//
//
//                 Hello: {userData.firstName} {userData.lastName}
//
//         </>


//
//   const[userData, setUserData]=useState({
//             firstName:"",
//             lastName:""
//     }
//     )
//
//     const[firstName, setFirstName]=useState("");
//     const[lastName, setLastName]=useState("");
//
//     function handleEvents(){
//
//         setUserData({
//             ...userData,
//             firstName:firstName,
//             lastName:lastName,
//         })
//     }
//
//     return (
//         <>
//             <input name='firstName' type="text" placeholder='first Name' onChange={(e)=> setFirstName(e.target.value)}/>
//             <input name='lastName' type="text" placeholder='last Name' onChange={(e)=> setLastName(e.target.value)}/>
//             <br/>
//             <button onClick={handleEvents}>Submit</button>
//             <br/>
//             Hello: {userData.firstName+'' +userData.lastName}
//
//         </>
//     )

//customer crud operations
//
//
// function App() {
//     const [customers,setCustomers] = useState<Customer[]>([]);
//     const[name,setName] = useState("");
//     const[address,setAddress] = useState("");
//     const[phone,setPhone] = useState("");
//     const[email,setEmail] = useState("");
//
//     function addCustomers() {
//         const newCustomers = new Customer(name, address, email, phone);
//         setCustomers((customers) => [...customers,newCustomers]);
//     }
//
//     function deleteCustomers() {
//         setCustomers((customers)=>customers.slice(0,-1))
//     }
//     function deleteByEmail() {
//         setCustomers(customers.filter((customer) => customer.email !== email));
//     }
//
//     function updateCustomer() {
//       setCustomers(customers.map((customer) =>
//           customer.email === email
//               ?{
//                 ...customer,name:name,address:address,phone:phone,email:email
//               }
//               :customer
//       ));
//     }
//
//     return (
//         <>
//             <input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
//             <input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
//             <input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
//             <input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
//
//             <button onClick={addCustomers}>Add Customer</button>
//             <button onClick={deleteCustomers}>Delete Customer</button>
//             <button onClick={deleteByEmail}>Delete customer by Email</button>
//             <button onClick={updateCustomer}>Update Customer</button>
//
//             {customers.map((customer) => (
//
//
//                 <div key={customer.email}>
//                     {customer.name + " " + customer.address + " " + customer.email + "" + customer.phone}
//                 </div>
//             ))}
//
//
//         </>
//     )
// }



//function App() {
//
//   const routes=createBrowserRouter([
//       {path:'/',element:<Dashboard/>},
//       {path:'/add',element:<AddCustomer/>},
//       {path:'*',element:<Error/>},
//       {path:'/update',element:<UpdateCustomer/>},
//       {path:'/delete',element:<DeleteCustomer/>}
//   ]);
//     return (
//         <>
//             <RouterProvider router={routes}>
//
//             </RouterProvider>
//
//         </>
//     )
//
// }
//
// export default App




//function App() {
//
//     const routes = createBrowserRouter([
//         {
//             path: "/",
//             element: <RootLayout />,
//             children: [
//                 { path: "/", element: <Dashboard /> },
//                 { path: "/add-customer", element: <AddCustomer /> },
//                 { path: "/update-customer", element: <UpdateCustomer /> },
//                 { path: "/delete-customer", element: <DeleteCustomer /> },
//                 { path: "/add-item", element: <AddItem /> }, // Added route for adding an item
//                 { path: "/update-item", element: <UpdateItem /> }, // Added route for updating an item
//                 { path: "/delete-item", element: <DeleteItem /> }, // Added route for deleting an item
//             ],
//             errorElement: <Error />,
//         },
//         {
//             path: "*",
//             element: <Error />,
//         },
//     ]);
//
//     return (
//         <ItemProvider>
//             <CustomerProvider>
//                 <RouterProvider router={routes} />
//             </CustomerProvider>
//         </ItemProvider>
//     );
// }
//
// export default App