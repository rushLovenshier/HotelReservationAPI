const express = require('express');
const RoomController = require('../controller/RoomController');

const router = express.Router();

router.post('/saveRoom', RoomController.saveRoom);
router.put('/updateRoom', RoomController.updateRoom);
router.delete('/deleteRoom', RoomController.deleteRoom);
router.get('/searchRoom', RoomController.searchRoom);
router.get('/getAllRooms', RoomController.getAllRooms);

module.exports = router;