const STATUS_CODE = require("../constants/statusCode");
const { InterviewRepository } = require("../repositories");
const AppError = require("../utils/error");

const interviewRepository = new InterviewRepository();

async function createInterview(data) {
    try {
        const response = await interviewRepository.create(data);
        return response;
    } catch (error) {
        throw new AppError('Error in creating interview', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createInterview
};