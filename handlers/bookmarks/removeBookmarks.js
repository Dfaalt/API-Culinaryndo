const { Bookmarks, Foods } = require("../../models");

// Remove a bookmark
module.exports = {
  removeBookmark: async (req, res, next) => {
    try {
      const { bookmarkId, userId } = req.params;

      // Periksa apakah bookmark ada
      const bookmark = await Bookmarks.findOne({ where: { id: bookmarkId, userId } });
      if (!bookmark) {
        return res.status(404).json({
          status: false,
          message: "Bookmark not found",
        });
      }

      // Hapus bookmark
      await bookmark.destroy();

      return res.status(200).json({
        status: true,
        message: "Bookmark removed successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
