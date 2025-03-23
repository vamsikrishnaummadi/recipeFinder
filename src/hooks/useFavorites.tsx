
import { useState, useEffect } from 'react';
import { Recipe } from '@/utils/types';
import { useToast } from '@/hooks/use-toast';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const { toast } = useToast();

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error('Error parsing stored favorites:', e);
        localStorage.removeItem('favoriteRecipes');
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  // Add a recipe to favorites
  const addFavorite = (recipe: Recipe) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === recipe.id);
    
    if (!isAlreadyFavorite) {
      setFavorites(prev => [...prev, recipe]);
      toast({
        title: "Added to favorites",
        description: `${recipe.title} has been added to your favorites`,
        variant: "default",
      });
    }
  };

  // Remove a recipe from favorites
  const removeFavorite = (recipeId: string) => {
    const recipe = favorites.find(fav => fav.id === recipeId);
    setFavorites(prev => prev.filter(recipe => recipe.id !== recipeId));
    
    if (recipe) {
      toast({
        title: "Removed from favorites",
        description: `${recipe.title} has been removed from your favorites`,
        variant: "default",
      });
    }
  };

  // Check if a recipe is in favorites
  const isFavorite = (recipeId: string): boolean => {
    return favorites.some(recipe => recipe.id === recipeId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
