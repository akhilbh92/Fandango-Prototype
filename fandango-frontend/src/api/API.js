const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const getMovies = () =>
    fetch(`${api}/getMovies`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({})
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

let successHandler = (res) => {
    if (res.status === 401) {
        // UserHelper.redirectToLogin();
    } else {
        return res.json();
    }
}