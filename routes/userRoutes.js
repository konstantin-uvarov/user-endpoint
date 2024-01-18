const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const errorHandler = require('../middleware/errorHandler');

router.get('/getUpdatedUsers', userController.getUpdatedUsers, errorHandler);
router.get('/getAllUsers', userController.getAllUsers, errorHandler);
router.post('/insertUser', userController.insertUser, errorHandler);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser, errorHandler);

module.exports = router;