const express = require('express');
const router = express.Router();
const {getData, getDataByUUID, postData} = require('../controllers/sensorData.controller');

router.post('/sensor', postData);
router.get('/sensor', getData);
router.get('/sensor/:uuid', getDataByUUID);


module.exports = router