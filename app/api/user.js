'use strict';

let privateApi = {};

privateApi.get_user = function(request, response) {
    request.session.views = request.session.views + 1 || 1;
    response("Hello User ... " + request.params.id + ", Views = " + request.session.views);
}

privateApi.create_user = function(request, response) {
    response("Adding new user to DB ... " + request.payload);
}

let publicRoutes = [
    {
        method: 'GET',
        path: '/user/{id}',
        config: {
            plugins: {
                policies: ['isLoggedIn']
            },
            description: 'Get user',
            notes: 'Returns an object representing the user identified by the id passed in the path',
            tags: ['api'],
            handler: privateApi.get_user
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/user',
        config: {
            handler: privateApi.create_user
        }
    }
];

module.exports = publicRoutes;