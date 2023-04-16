import axios from 'axios';

let BASE_URL = 'https://fakestoreapi.com';

let getProducts = async () => {
    let response = await axios.get(`${BASE_URL}/products`);
    return response.data;
};

export { getProducts };
