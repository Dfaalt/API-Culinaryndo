const express = require("express");
const router = express.Router();
const cHistory = require("../handlers/histories");

router.post("/history/:userId", cHistory.addHistories.addHistory);
router.delete("/history/:userId/:historyId", cHistory.removeHistories.removeHistory);
router.get("/history/:userId", cHistory.getHistories.getHistories);

module.exports = router;