var policy = function(request, reply, next) {
    if(request.query.secret === '444') {
        return next(null, true);
    } else {
        return next(null, false);
    }
};

// These are optional
policy.post = true;

module.exports = policy;