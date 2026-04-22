const jwt = require('jsonwebtoken');
const AppError = require('../utils/error');
const STATUS_CODE = require('../constants/statusCode');
const { serverConfig } = require('../config');
const { authService } = require('../services');

const protect = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return next(
                new AppError("No Token Provided", STATUS_CODE.UNAUTHORIZED)
            );
        }

        const decoded = jwt.verify(token, serverConfig.JWT_SECRET);
    
        req.user = await authService.getUserById(decoded.id);

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    protect
}