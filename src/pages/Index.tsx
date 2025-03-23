
import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { FilterSection } from '@/components/FilterSection';
import { RecipeCard } from '@/components/RecipeCard';
import { useRecipes } from '@/hooks/useRecipes';
import { ChefHat, Loader2, Grid, List } from 'lucide-react';
import { SearchFilters } from '@/utils/types';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const {
    recipes,
    loading,
    error,
    searchRecipes,
    recentSearches,
    recommendedRecipes,
    loadRecommendedRecipes,
  } = useRecipes();
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: '',
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    loadRecommendedRecipes();
  }, []);

  const handleSearch = (query: string) => {
    const newFilters = { ...searchFilters, query };
    setSearchFilters(newFilters);
    searchRecipes(newFilters);
  };

  const handleFilterChange = (filters: Partial<SearchFilters>) => {
    const newFilters = { ...searchFilters, ...filters };
    setSearchFilters(newFilters);
    searchRecipes(newFilters);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto flex justify-center mb-4">
            <ChefHat className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Recipe Finder
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Find delicious recipes based on ingredients you have, dietary preferences, or what you're craving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <SearchBar onSearch={handleSearch} recentSearches={recentSearches} />
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <FilterSection onFilterChange={handleFilterChange} />
      </motion.section>

      <section className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {searchFilters.query ? 'Search Results' : 'Recommended Recipes'}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-md p-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Grid view"
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`rounded-md p-1.5 transition-colors ${
                viewMode === 'list'
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  Finding the perfect recipes for you...
                </p>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">
                  Something went wrong
                </p>
                <p className="text-muted-foreground">
                  {error}
                </p>
              </div>
            </motion.div>
          ) : recipes.length > 0 ? (
            <motion.div
              key="recipes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                }`}
              >
                {recipes.map((recipe, index) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                    layout={viewMode}
                  />
                ))}
              </div>
            </motion.div>
          ) : searchFilters.query ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">
                  No recipes found
                </p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            </motion.div>
          ) : recommendedRecipes.length > 0 ? (
            <motion.div
              key="recommended"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                }`}
              >
                {recommendedRecipes.map((recipe, index) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                    layout={viewMode}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">
                  Start searching for recipes
                </p>
                <p className="text-muted-foreground">
                  Use the search bar above to find delicious recipes
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Index;
