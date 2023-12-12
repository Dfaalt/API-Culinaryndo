const { Histories, Foods, User } = require("../../models");

// Add a bookmark
module.exports = {
    addHistory: async (req, res, next) => {
        try {
        const { foodsId } = req.body;
        const { userId } = req.params; // Mengambil userId dari parameter URL

        // Periksa apakah foodsId ada dalam database
        const food = await Foods.findOne({ where: { id: foodsId } });

        if (!food) {
            return res.status(404).json({
            status: false,
            message: "food not found",
            });
        }

        // Periksa apakah userId ada dalam database
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({
            status: false,
            message: "User not found",
            });
        }

        // Create a new history
        const History = await Histories.create({ foodsId, userId });

        return res.status(201).json({
            status: true,
            message: "History entry added successfullyy",
            data: History,
        });
        } catch (error) {
        next(error);
        }
    },
};
