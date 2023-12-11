const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const express = require('express');
const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const testRoutes = require('./routes/testRoutes');
const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const corsMiddleware = require('./middleware/cors');
const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const corsMiddleware = require('./middleware/cors');
const sequelize = require('./models/index').sequelize;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);

module.exports = app;
app.use(loggerMiddleware);
app.use('/api', testRoutes); 
app.use(loggerMiddleware);
app.use(corsMiddleware);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;