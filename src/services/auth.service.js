const STATUS_CODE = require("../constants/statusCode");
const { AuthRepository } = require("../repositories");
const AppError = require("../utils/error");
const generateToken = require("../utils/generateToken");

const authRepository = new AuthRepository();

async function createUser(data) {
    try {
        const { name, email, password, role } = data;

        const userExists = await authRepository.findUserByEmail(email);
        if (userExists) {
            throw new AppError('User Already exists', STATUS_CODE.BAD_REQUEST);
        }

        const user = await authRepository.create({
            name,
            email,
            password,
            role
        });

        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Error in creating user', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function loginUser(data) {
    try {
        const { email, password } = data;
        const user = await authRepository.findUserByEmail(email);

        if (user && (await user.comparePassword(password))) {
            return {
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token: generateToken(user._id)
            };
        }
        else {
            throw new AppError('Invalid Credentials', STATUS_CODE.BAD_REQUEST);
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Error Logging in', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function getUserById(id) {
    return await authRepository.getById(id);
}

module.exports = {
    createUser,
    loginUser,
    getUserById
}