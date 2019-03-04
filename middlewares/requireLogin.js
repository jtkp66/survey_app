module.exports = (req, res, next) => {
    if (!req.user) {
        return resolve.status(401).send({ error: 'You must log in'})
    }

    next();
};
