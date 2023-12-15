const { Bookmarks, Foods, User } = require("../../models");

module.exports = {
    getBookmarkId: async (req, res, next) => {
        try {
            const { userId, foodsId } = req.params; // Mengambil userId dan foodId dari request object

            // Periksa apakah userId ada dalam database
            const user = await User.findOne({ where: { id: userId } });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "User not found",
                });
            }

            // Periksa apakah foodId ada dalam database
            const food = await Foods.findOne({ where: { id: foodsId } });
            if (!food) {
                return res.status(404).json({
                    status: false,
                    message: "Food not found",
                });
            }

            // Mencari bookmark berdasarkan userId dan foodId
            const bookmarks = await Bookmarks.findOne({
                where: { 
                    userId: userId,
                    foodsId: foodsId
                },
                include: [{
                    model: Foods,
                    as: 'foods' // Menggunakan alias yang sesuai dengan asosiasi
                }]
            });

            if (!bookmarks) {
                return res.status(404).json({
                    status: false,
                    message: "Bookmark not found",
                });
            }

            return res.status(200).json({
                status: true,
                message: "Bookmarked food fetched successfully",
                data: bookmarks.foods,
            });
        } catch (error) {
            next(error);
        }
    },
};
