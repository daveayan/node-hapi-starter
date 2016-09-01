'use strict';

let privateApi = {};

privateApi.get_class = function(request, response) {
    response("Here is the Class ... " + request.params.id);
}

let publicRoutes = [
    {
        method: 'GET',
        path: '/class/{id}',
        config: {
            handler: privateApi.get_class
        }
    }
];

module.exports = publicRoutes;