// controllers/UserController.js
const userService = require("../services/UserService");
const asyncErrorHandler = require("../helpers/asyncErrorHandler");

class UserController {
  getUpdatedUsers = asyncErrorHandler(async (req, res, next) => {
    const updatedUsers = await userService.getUpdatedUsers();
    res.json(updatedUsers);
  });

  getAllUsers = asyncErrorHandler(async (req, res, next) => {
    const users = await userService.getAllUsers();
    res.json(users);
  });

  insertUser = asyncErrorHandler(async (req, res, next) => {
    const user = await userService.insertUser(req.body);
    res.json(user);
  });

  updateUser = asyncErrorHandler(async (req, res, next) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  });

  deleteUser = asyncErrorHandler(async (req, res, next) => {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  });
}

module.exports = new UserController();
