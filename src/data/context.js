import { createContext } from 'react';

const initialState = {};

export const ProductContext = createContext(initialState);
export const ProductProvider = ProductContext.Provider;
