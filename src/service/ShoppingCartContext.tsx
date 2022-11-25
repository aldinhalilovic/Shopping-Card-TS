import axios from 'axios';
import React, { createContext, useState } from 'react';
import { Store } from '../models/models';

interface Props {
    children: React.ReactNode;
}

interface Values {
    getData: () => void;
    data: Store[];
}

export const ShoppingCartContext = createContext<Values | null>(null);

export const ShoppingCartContextProvider = ({ children }: Props) => {
    const [data, setData] = useState<Store[]>([]);

    const getData = async () => {
        await axios.get('https://dummyjson.com/products').then((data) => setData((prev) => [...prev, data.data]));
    };

    const values = {
        getData,
        data,
    };

    return <ShoppingCartContext.Provider value={values}>{children} </ShoppingCartContext.Provider>;
};
