const sequelize = require('./config/connection').sequelize;
const {Subject} = require('./models/subject.model');
const {SensorData} = require('./models/sensorData.model'); // Import the new model

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync database schema
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

syncDatabase();