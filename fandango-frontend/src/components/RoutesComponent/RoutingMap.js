let routingMap = {
    "2": ["/mhadmin", "/schedulemovie", "/cancelbooking", "/searchbill", "/movierevenue", "/preferences"],
    "1": ["/admin", "/admin/movies/:movieId", "/admin/addMovie", "/admin/addHall", "/admin/addUser",
        "/admin/updateUser", "/admin/citywiserevenue", "/admin/citywiserevenue/:movieId", "/admin/toptenhalls",
        "/admin/toptenmoviesbyrevenue", "/admin/clicksperpage", "/admin/moviereviewgraph", "/admin/movierevenueperhall",
        "/admin/tracediagram", "/searchbill", "/preferences"
    ],
    "3": ["/home", "/entertickets", "/moviedetailupdatereview", "/dashboard", "/preferences","/purchasehistory"]
};

module.exports = routingMap;