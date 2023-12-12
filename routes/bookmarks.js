const express = require("express");
const router = express.Router();
const cBookmarks = require("../handlers/bookmarks");

router.post("/bookmarks/:userId", cBookmarks.addBookmarks.addBookmark);
router.delete("/bookmarks/:userId/:bookmarkId", cBookmarks.removeBookmarks.removeBookmark);
router.get("/bookmarks/:userId", cBookmarks.getBookmarks.getBookmarks);

module.exports = router;