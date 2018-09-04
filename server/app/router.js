const router = require("express").Router();

router.get("/", (req, res) => res.json("GOT IT!"));

module.exports = router;
