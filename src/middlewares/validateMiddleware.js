const validate = (schema) => {
  return (req,res,next) => {

    const result = schema.safeParse(req.body);
    if (!result.success) {

      const errors = result.error.issues.map(issue => {

        if (issue.code === "invalid_type") {
          return `${issue.path[0]} is required`;
        }

        return issue.message;
      });

      return res.status(400).json({
        success:false,
        errors
      });
    }

    req.body = result.data;

    next();
  };
};

module.exports = {
  validate
};
