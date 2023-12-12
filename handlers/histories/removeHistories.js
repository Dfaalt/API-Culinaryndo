const { Histories, Foods, User } = require("../../models");

// Remove a history
module.exports = {
  removeHistory: async (req, res, next) => {
    try {
      const { historyId, userId } = req.params;

      // Periksa apakah history ada
      const history = await Histories.findOne({ where: { id: historyId, userId } });
      if (!history) {
        return res.status(404).json({
          status: false,
          message: "history not found",
        });
      }

      // Hapus history
      await history.destroy();

      return res.status(200).json({
        status: true,
        message: "history removed successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
