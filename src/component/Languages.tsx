import {ReactNode} from "react";

export function Languages(props:{children:ReactNode,onClickLanguages:any}) {
        return (
            <div>
                <button onClick={()=>{props.onClickLanguages(props.children)}}>{props.children}</button>
            </div>
        )
}