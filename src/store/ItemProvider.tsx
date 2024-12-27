import {createContext, useState, ReactNode} from "react";
import {Item} from "../models/Item.ts";

export const ItemContext = createContext([]);

export function ItemProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<Item[]>([]);
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider>
    );
}
