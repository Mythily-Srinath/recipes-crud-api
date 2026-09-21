const express = require("express");

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require("../controllers/recipeController");

const router = express.Router();

// Create recipe
router.post("/", createRecipe);

// Get all recipes
router.get("/", getAllRecipes);

// Get recipe by ID
router.get("/:id", getRecipeById);

// Update recipe
router.put("/:id", updateRecipe);

// Delete recipe
router.delete("/:id", deleteRecipe);

module.exports = router;