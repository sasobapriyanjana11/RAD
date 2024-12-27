export function ItemModal(props,children) {
    return (
        <>
            <input type="text" placeholder="Code" onChange={(e) => props.setCode(e.target.value)}/>
            <input type="text" placeholder="Name" onChange={(e) => props.setName(e.target.value)}/>
            <input type="number" placeholder="Price" onChange={(e) => props.setPrice(Number(e.target.value))}/>
            <input type="number" placeholder="Quantity" onChange={(e) => props.setQuantity(Number(e.target.value))}/>

            <br/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}
