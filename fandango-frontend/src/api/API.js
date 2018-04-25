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

export const getLimitedMovies = (noOfRecords) =>
    fetch(`${api}/getMovies`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ count: noOfRecords })
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const getHalls = () =>
    fetch(`${api}/getHalls`, {
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

export const getScreensByHall = (hallJson) =>
    fetch(`${api}/getScreens`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(hallJson)
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const addMovieSchedule = (movieScheduleJson) =>
    fetch(`${api}/addMovieSchedule`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(movieScheduleJson)
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const deleteMovieSchedule = (movieScheduleId) =>
    fetch(`${api}/deleteMovieSchedule`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id: movieScheduleId })
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const getMovieSchedules = (movieScheduleJson) =>
    fetch(`${api}/getMovieSchedules`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(movieScheduleJson)
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const searchUserBooking = (bookingId) =>
    fetch(`${api}/searchBookingById`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ bookingId: bookingId })
    }).then(res => {
        return successHandler(res);
    }).catch(error => {
        return error;
    });

export const cancelUserBooking = (bookingId) =>
    fetch(`${api}/cancelUserBooking`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ bookingId: bookingId })
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