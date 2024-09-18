const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const distributionRoute = require('./Routes/distributionRoute');
const app = express();
const PORT = 3500;
app.use(bodyParser.json());

connectDB()
app.use('/api', distributionRoute);
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
})