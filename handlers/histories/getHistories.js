const { Histories, Foods, User } = require("../../models");

module.exports = {
    getHistories: async (req, res, next) => {
    try {
        const { userId } = req.params; // Assuming user ID is available from request object

        // Periksa apakah userId ada dalam database
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
          return res.status(404).json({
            status: false,
            message: "User not found",
          });
        }

        const histories = await Histories.findAll({
        where: { userId },
        include: [{
        model: Foods,
        as: 'foods' // Menggunakan alias yang sesuai dengan asosiasi
        }]
        });

        return res.status(200).json({
        status: true,
        message: "Histories foods fetched successfully",
        data: histories.map(history => history.foods),
        });
        }catch (error) {
        next(error);
        }
    },
};
