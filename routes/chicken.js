const express = require("express");
const router = express.Router();
const {
  getChickens,
  getChicken,
  createChicken,
  updateChicken,
  patchChicken,
  deleteChicken,
  runChickens,
} = require("../controllers/chicken");

// CRUD
router.get("chicken/", getChickens);
router.get("chicken/:id", getChicken);
router.post("chicken/", createChicken);
router.put("chicken/:id", updateChicken);
router.patch("chicken/:id", patchChicken);
router.delete("chicken/:id", deleteChicken);

// Run
router.post("chicken/run", runChickens);

module.exports = router;
