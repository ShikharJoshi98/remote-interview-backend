const CrudRepository = require("./crud.repository");
const Interview = require('../models/Interview');

class InterviewRepository extends CrudRepository{
    constructor() {
        super(Interview);
    }
};

module.exports = InterviewRepository;