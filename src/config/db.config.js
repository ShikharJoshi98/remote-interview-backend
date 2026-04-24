const mongoose = require('mongoose');
const { MONGO_URI } = require('./server.config');
const logger = require('../utils/logger');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        if (conn.connection.host) {
            logger.info('Connected to DB successfully');
        }
    } catch (error) {
        logger.error('Unable to connect to DB');
        process.exit(1);
    }
}

module.exports = {
    connectDb
}