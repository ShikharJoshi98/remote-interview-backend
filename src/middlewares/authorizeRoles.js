const STATUS_CODE = require("../constants/statusCode")
const AppError = require("../utils/error")

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(
                new AppError("Unauthorized", STATUS_CODE.UNAUTHORIZED)
            );
        }

        if (!allowedRoles.includes(req.user.role)) {
            return next(
                new AppError("Forbidden: Access Denied", STATUS_CODE.FORBIDDEN)
            );
        }

        next();
    }
}