export const requests_product = (callback) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => callback(json))
}

export const delete_product = (callback) => {
    fetch('https://fakestoreapi.com/products/6',
        {
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>callback(json))
}

export const registaration = () => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())
        .then(console.log);
}