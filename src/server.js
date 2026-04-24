const express = require('express');
const cors = require('cors');

const { serverConfig, dbConfig } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const apiRoutes = require('./routes');
const logger = require('./utils/logger');
const cookieParser = require('cookie-parser');

const app = express();
dbConfig.connectDb();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running ...');
});

app.use('/api', apiRoutes);

app.use(errorHandler);

app.listen(serverConfig.PORT, () => {
    logger.info(`Server running on ${serverConfig.PORT}`);
})