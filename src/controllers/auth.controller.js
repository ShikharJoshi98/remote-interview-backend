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
        const { user, token } = await authService.loginUser(req.body);
        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 100
            }
        );
        return successResponse(
            res,
            {
                user
            },
            'Logged in Successfully',
            STATUS_CODE.OK
        );
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        return successResponse(res, null, 'Logged out successfully', STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

const getCurrentUser = async (req, res, next) => {
    try {
        const user = await authService.getUserById(req.user._id);
        return successResponse(res, user, 'User fetched', STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login,
    getCurrentUser,
    logout
}