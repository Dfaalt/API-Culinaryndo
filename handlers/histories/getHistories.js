const { Histories, Foods, User } = require('../../models');

module.exports = {
  // eslint-disable-next-line consistent-return
  getHistories: async (req, res, next) => {
    try {
      const { userId } = req.params;

      // Periksa apakah userId ada dalam database
      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: 'User not found',
        });
      }

      const histories = await Histories.findAll({
        where: { userId },
        include: [{
          model: Foods,
          as: 'foods', // Menggunakan alias yang sesuai dengan asosiasi
        }],
      });

      // Mengubah data menjadi format yang termasuk id bookmark dan data makanan
      const formattedBookmarks = histories.map((history) => ({
        historyId: history.id, // Menambahkan id history
        createdAt: history.createdAt, // Menambahkan createdAt
        updatedAt: history.updatedAt, // Menambahkan updatedAt
        foods: history.foods,
      }));

      return res.status(200).json({
        status: true,
        message: 'Histories foods fetched successfully',
        data: formattedBookmarks,
      });
    } catch (error) {
      next(error);
    }
  },
};
