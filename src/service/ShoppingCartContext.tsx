import axios from 'axios';
import React, { createContext, useState } from 'react';
import { Store, Product } from '../models/models';

const BASE_URL = ' https://dummyjson.com/products';

interface Props {
   children: React.ReactNode;
}

interface Values {
   getData: (num: number) => void;
   data: Store;
   setData: React.Dispatch<React.SetStateAction<any>>;
}

const ShoppingCartContext = createContext<Values | null>(null);
const ShoppingCartContextProvider = ({ children }: Props) => {
   const [data, setData] = useState<Store>({
      limit: 0,
      products: [],
      skip: 0,
      total: 0,
   });

   const getData = async (num: number) => {
      await axios.get(`${BASE_URL}?limit=20&skip=${num}`).then((data) => setData(data.data));
   };

   const values = {
      getData,
      data,
      setData,
   };

   return <ShoppingCartContext.Provider value={values}>{children} </ShoppingCartContext.Provider>;
};

export { ShoppingCartContext, ShoppingCartContextProvider };
