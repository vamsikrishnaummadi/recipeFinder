
import { useState, useEffect } from 'react';
import { Recipe, SearchFilters } from '@/utils/types';
import { searchRecipes, getRecipeRecommendations } from '@/utils/api';
import { useToast } from '@/hooks/use-toast';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const { toast } = useToast();

  // Get recent searches from localStorage on mount
  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // Save search term to recent searches
  const addToRecentSearches = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    const updatedSearches = [
      searchTerm,
      ...recentSearches.filter(term => term !== searchTerm)
    ].slice(0, 5); // Keep only the 5 most recent searches

    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  // Function to search for recipes
  const searchRecipesWithFilters = async (filters: SearchFilters) => {
    setLoading(true);
    setError(null);

    try {
      if (filters.query) {
        addToRecentSearches(filters.query);
      }

      const { results, totalResults: total } = await searchRecipes(filters);
      setRecipes(results);
      setTotalResults(total);
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: "Try adjusting your search criteria",
          variant: "default",
        });
      }
    } catch (err) {
      setError('Failed to search recipes. Please try again later.');
      toast({
        title: "Error",
        description: "Failed to search recipes. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to load recommended recipes
  const loadRecommendedRecipes = async () => {
    try {
      const recipes = await getRecipeRecommendations();
      setRecommendedRecipes(recipes);
    } catch (err) {
      console.error('Failed to load recommended recipes:', err);
    }
  };

  return {
    recipes,
    loading,
    error,
    totalResults,
    recentSearches,
    recommendedRecipes,
    searchRecipes: searchRecipesWithFilters,
    loadRecommendedRecipes,
  };
}
