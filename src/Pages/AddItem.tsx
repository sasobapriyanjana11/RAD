import {useState, useContext} from "react";
import {Item} from "../models/Item.ts";
import {ItemContext} from "../store/ItemProvider.tsx";

export function AddItem() {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);

    const [items, setItems] = useContext(ItemContext);

    function handleSubmit() {
        const newItem: Item = new Item(code, name, price, quantity);
        setItems((prevItems: Item[]) => [...prevItems, newItem]);
    }

    return (
        <>
            <h1>Add Item</h1>
            <input type="text" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Price" onChange={(e) => setPrice(Number(e.target.value))} />
            <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
            <button onClick={handleSubmit}>Add Item</button>
        </>
    );
}
