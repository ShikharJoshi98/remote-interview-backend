const User = require("../models/User");
const CrudRepository = require("./crud.repository");

class AuthRepository extends CrudRepository{
    constructor() {
        super(User);
    }
    async findUserByEmail(email) {
        const response = await User.findOne({ email });
        return response;
    }
}

module.exports = AuthRepository;