import { Recipe, SearchFilters } from './types';
import recipeData from './recipeData';

/**
 * Search for recipes with the given parameters
 */
export async function searchRecipes(params: SearchFilters): Promise<{results: Recipe[], totalResults: number}> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Filter recipes based on search parameters
  let filteredRecipes = [...recipeData];
  
  // Filter by query
  if (params.query) {
    const query = params.query.toLowerCase();
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query) || 
      recipe.diets.some(diet => diet.toLowerCase().includes(query)) ||
      recipe.extendedIngredients.some(ing => ing.name.toLowerCase().includes(query))
    );
  }
  
  // Filter by diet
  if (params.diet) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.diets.some(diet => diet.toLowerCase() === params.diet?.toLowerCase())
    );
  }
  
  // Filter by meal type
  if (params.mealType) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.dishTypes.some(type => type.toLowerCase() === params.mealType?.toLowerCase())
    );
  }
  
  // Filter by max ready time
  if (params.maxReadyTime) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.readyInMinutes <= params.maxReadyTime!
    );
  }
  
  // Sort recipes
  if (params.sort) {
    if (params.sort === 'time') {
      filteredRecipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else {
      // Default to popularity sort
      // For this example, we're just keeping the original order
    }
  }
  
  return {
    results: filteredRecipes,
    totalResults: filteredRecipes.length
  };
}

/**
 * Get recipe details by ID
 */
export async function getRecipeById(id: string): Promise<Recipe> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const recipe = recipeData.find(r => r.id === id);
  
  if (!recipe) {
    throw new Error('Recipe not found');
  }
  
  return recipe;
}

/**
 * Get recipe recommendations
 */
export async function getRecipeRecommendations(): Promise<Recipe[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Shuffle and return a subset of recipes
  const shuffled = [...recipeData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}
