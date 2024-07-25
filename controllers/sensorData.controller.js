const { SensorData } = require("../models/sensorData.model");

const postData = async (req, res) => {
  try {
    const { uid, sensor, temperature, humidity, atmPressure, extSensor } =
      req.body;

    // Validate required fields
    if (!uid || !sensor || !temperature || !humidity) {
      return res
        .status(400)
        .json({
          success: 0,
          message: "uid, sensor, temperature, and humidity are required",
        });
    }

    // Create new sensor data entry
    const newSensorData = await SensorData.create({
      uid,
      sensor,
      temperature,
      humidity,
      atmPressure,
      extSensor,
    });

    // Respond with 1 if the data is posted successfully
    res.status(201).json({ success: 1});
  } catch (error) {
    console.error("Error creating sensor data:", error);
    // Respond with 0 if there's an error
    res.status(500).json({ success: 0, message: "Internal server error" });
  }
};

const getData = async (req, res) => {
  try {
    // Fetch all sensor data entries
    const sensorDataList = await SensorData.findAll();

    // Respond with the fetched sensor data
    res.status(200).json(sensorDataList);
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDataByUUID = async (req, res) => {
  try {
    const { uid } = req.params;

    // Fetch sensor data entries by UID
    const sensorData = await SensorData.findAll({
      where: { uid },
    });

    if (sensorData.length === 0) {
      return res
        .status(404)
        .json({ message: "No sensor data found for the given UID" });
    }

    // Respond with the fetched sensor data
    res.status(200).json(sensorData);
  } catch (error) {
    console.error("Error fetching sensor data by UID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getData,
  postData,
  getDataByUUID,
};
