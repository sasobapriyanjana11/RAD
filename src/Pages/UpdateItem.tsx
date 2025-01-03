import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import {ItemModal} from "../component/ItemModal.tsx";

export const UpdateItem = () => {

    const navigate = useNavigate();
    const [items, dispatch] = useContext(ItemContext);

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);


    function handleSubmit() {
        const newItem= new Item(code, name, price, quantity);
        dispatch({type: 'UPDATE_ITEM', payload: newItem});
        navigate('/');
    }

    return (
        <>
            <header><h2>Update Item</h2></header>
            <br/>
            <ItemModal handleSubmit={handleSubmit} setCode={setCode} setName={setName} setPrice={setPrice}
                       setQuantity={setQuantity}>Update Item</ItemModal>
        </>
    );
};
