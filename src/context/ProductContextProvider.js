import React, { useState, useEffect, createContext } from 'react';

//Api
import { getProducts } from '../services/Api';

export let ProductContext = createContext();

const ProductContextProvider = (props) => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let FetchApi = async () => {
            setProducts(await getProducts());
        };

        FetchApi();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
