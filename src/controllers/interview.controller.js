const { successResponse } = require("../constants/response");
const STATUS_CODE = require("../constants/statusCode");
const { interviewService } = require("../services");

const createInterview = async (req, res, next) => {
    try {
        const interview = await interviewService.createInterview(req.body);
        return successResponse(res, interview, 'Created interview successfully', STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createInterview
}