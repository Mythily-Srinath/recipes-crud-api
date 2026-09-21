const mongoose = require("mongoose");
const Recipe = require("../models/recipeModel");

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      message: "Recipe created successfully",
      recipe
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create recipe",
      error: error.message
    });
  }
};

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: recipes.length,
      recipes
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recipes",
      error: error.message
    });
  }
};

// Get recipe by ID
const getRecipeById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe ID"
      });
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recipe",
      error: error.message
    });
  }
};

// Update recipe
const updateRecipe = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe ID"
      });
    }

    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.status(200).json({
      message: "Recipe updated successfully",
      recipe
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update recipe",
      error: error.message
    });
  }
};

// Delete recipe
const deleteRecipe = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe ID"
      });
    }

    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete recipe",
      error: error.message
    });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
};