const User = require("../models/User");

class UserService {
  async getUpdatedUsers() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const updatedUsers = await User.find({
      updated_at: { $gte: startOfToday },
    });
    return updatedUsers;
  }

  async getAllUsers() {
    const users = await User.find({});
    return users;
  }

  async insertUser(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  }

  async updateUser(userId, userData) {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  }

  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
