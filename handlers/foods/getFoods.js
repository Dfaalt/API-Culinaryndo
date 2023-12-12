const { Foods } = require("../../models");

module.exports = {
  getFoods: async (req, res, next) => {
    try {
      const foods = await Foods.findAll();

      return res.status(200).json({
        status: true,
        message: "Fetched all food items successfully",
        data: foods
      });
    } catch (error) {
      next(error);
    }
  },
};