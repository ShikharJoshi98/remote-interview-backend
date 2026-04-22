const express = require('express');
const cors = require('cors');

const { serverConfig, dbConfig } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const apiRoutes = require('./routes');

const app = express();
dbConfig.connectDb();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running ...');
});

app.use('/api', apiRoutes);

app.use(errorHandler);

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on ${serverConfig.PORT}`);
})