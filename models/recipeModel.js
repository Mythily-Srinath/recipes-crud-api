const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    ingredients: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "At least one ingredient is required"
      }
    },

    instructions: {
      type: String,
      required: true,
      trim: true
    },

    prepTime: {
      type: Number,
      required: true,
      min: 1
    },

    cookTime: {
      type: Number,
      required: true,
      min: 1
    },

    servings: {
      type: Number,
      required: true,
      min: 1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);