export default (route,body) => {
    return new Promise(function(resolve,reject){
        const url = 'localhost:3001' + route;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((responsejson) => {
                resolve(responsejson)
            })
            .catch((error) => {
                reject(error)
            });
    })
};