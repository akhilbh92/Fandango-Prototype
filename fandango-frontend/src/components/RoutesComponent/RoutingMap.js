let routingMap = {
    "2": ["/mhadmin", "/schedulemovie", "/cancelbooking", "/searchbill", "/movierevenue"],
    "1": ["/admin", "/admin/movies/:movieId", "/admin/addMovie", "/admin/addHall", "/admin/addUser",
        "/admin/updateUser", "/admin/citywiserevenue", "/admin/citywiserevenue/:movieId", "/admin/toptenhalls",
        "/admin/toptenmoviesbyrevenue", "/admin/clicksperpage", "/admin/moviereviewgraph", "/admin/movierevenueperhall",
        "/admin/tracediagram", "/searchbill"
    ]
};

module.exports = routingMap;