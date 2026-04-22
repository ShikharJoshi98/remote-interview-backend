const successResponse = require("../constants/response");
const STATUS_CODE = require("../constants/statusCode");
const { authService } = require("../services")

const register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body);
        return successResponse(res, user, 'User created successfully', STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const {user, token} = await authService.loginUser(req.body);
        return successResponse(
            res,
            {
                user,
                token
            },
            'Logged in Successfully',
            STATUS_CODE.OK
        );
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
}