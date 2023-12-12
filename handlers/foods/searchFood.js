const { Foods } = require("../../models");

module.exports = {
    searchFood: async (req, res, next) => {
        try {
            const { title } = req.params; // Assuming the title is passed as a query parameter

            // Search for food items where the title matches the provided input
            const foods = await Foods.findAll({
                where: {
                    title: title
                }
            });

            if (foods.length === 0) {
                return res.status(404).json({
                    status: false,
                    message: "No food items found with the given title",
                });
            }

            return res.status(200).json({
                status: true,
                message: "Food items found successfully",
                data: foods,
            });
        } catch (error) {
            next(error);
        }
    }
};
