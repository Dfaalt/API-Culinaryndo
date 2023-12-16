const { Bookmarks, Foods, User } = require('../../models');

module.exports = {
  // eslint-disable-next-line consistent-return
  getBookmarks: async (req, res, next) => {
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

      const bookmarks = await Bookmarks.findAll({
        where: { userId },
        include: [{
          model: Foods,
          as: 'foods', // Menggunakan alias yang sesuai dengan asosiasi
        }],
      });

      // Mengubah data menjadi format yang termasuk id bookmark dan data makanan
      const formattedBookmarks = bookmarks.map((bookmark) => ({
        bookmarkId: bookmark.id, // Menambahkan id bookmark
        foods: bookmark.foods,
      }));

      return res.status(200).json({
        status: true,
        message: 'Bookmarked foods fetched successfully',
        data: formattedBookmarks,
      });
    } catch (error) {
      next(error);
    }
  },
};
