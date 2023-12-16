const { Bookmarks, Foods, User } = require('../../models');

// Add a bookmark
module.exports = {
  // eslint-disable-next-line consistent-return
  addBookmark: async (req, res, next) => {
    try {
      const { foodsId } = req.body;
      const { userId } = req.params;

      // Periksa apakah foodsId ada dalam database
      const food = await Foods.findOne({ where: { id: foodsId } });

      if (!food) {
        return res.status(404).json({
          status: false,
          message: 'food not found',
        });
      }

      // Periksa apakah userId ada dalam database
      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: 'User not found',
        });
      }

      // Check if the bookmark already exists
      const existingBookmark = await Bookmarks.findOne({ where: { foodsId, userId } });

      if (existingBookmark) {
        return res.status(409).json({
          status: false,
          message: 'Bookmark already exists',
        });
      }

      // Create a new bookmark
      const bookmark = await Bookmarks.create({ foodsId, userId });

      return res.status(201).json({
        status: true,
        message: 'Bookmark added successfully',
        data: bookmark,
      });
    } catch (error) {
      next(error);
    }
  },
};
