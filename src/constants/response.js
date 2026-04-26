const successResponse = (res, data, message, statusCode) => {
    return res
        .status(statusCode || 200)
        .json({
            success: true,
            message: message || 'Successfull',
            data: data || {}
        });
};

module.exports = {
    successResponse
};
