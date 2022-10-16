export const requests_product = (callback) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => callback(json))
}