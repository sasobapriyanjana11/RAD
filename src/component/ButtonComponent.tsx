// export default function ButtonComponent(props:{name:string}){
//     return (
//         <div>
//             <button>{props.name}</button>
//         </div>
//     );
// }

// export default function ButtonComponent(props:{children:ReactNode}) {
//     return (
//         <div>
//             <button>{props.children}</button>
//         </div>
//     )
// }

//export default function ButtonComponent(props:{children:ReactNode,onSelect:any}) {
//     return (
//         <div>
//             <button onClick={()=>{props.onSelect(props.children)}}>{props.children}</button>
//         </div>
//     )
// }

import {ReactNode} from "react";


export default function ButtonComponent(props: any) {
    let value = props.count;
    if (props.children == 'Add') {
        value = value + 1;
    } else {
        value = value - 1;
    }
    return (
        <div>
            <button onClick={() => {
                props.setCount(value)
            }}>{props.children}</button>
        </div>
    )

}


export function SmallButtonComponent() {

    return (
        <div>
            <button>click me</button>
            <button>click me</button>
            <button>click me</button>
        </div>
    );
}