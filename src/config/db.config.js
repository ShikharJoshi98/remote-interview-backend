const mongoose = require('mongoose');
const { MONGO_URI } = require('./server.config');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        if (conn.connection.host) {
            console.log('Connected to DB successfully');
        }
    } catch (error) {
        console.error('Unable to connect to DB');
        process.exit(1);
    }
}

module.exports = {
    connectDb
}