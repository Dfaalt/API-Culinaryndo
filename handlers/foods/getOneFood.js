const { Foods } = require("../../models");

module.exports = {
    getOneFood : async(req,res,next) => {
        try {
            const { id } = req.params;
            const findFood = await Foods.findOne({ where: {id} });

            if(!findFood) {
                return res.status(404).json({
                    status: false,
                    message: "food not found",
                });
            }

            return res.status(200).json({
                status: true,
                message: "get food successful",
                data: findFood,
            });
        } catch (error) {
            next(error)
        }
    }
}