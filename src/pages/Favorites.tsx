
import { useState } from 'react';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchBar } from '@/components/SearchBar';
import { useFavorites } from '@/hooks/useFavorites';
import { Heart, Grid, List, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Favorites = () => {
  const { favorites } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter favorites based on search query
  const filteredFavorites = favorites.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
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
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            My Favorites
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Your collection of saved recipes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search your favorites..."
          />
        </motion.div>
      </section>

      <section className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {searchQuery
              ? `Search Results (${filteredFavorites.length})`
              : `Favorite Recipes (${favorites.length})`}
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
          {filteredFavorites.length > 0 ? (
            <motion.div
              key="favorites"
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
                {filteredFavorites.map((recipe, index) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                    layout={viewMode}
                  />
                ))}
              </div>
            </motion.div>
          ) : searchQuery ? (
            <motion.div
              key="no-search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="text-center">
                <Search className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-4 text-lg font-medium text-foreground">
                  No matching favorites found
                </p>
                <p className="text-muted-foreground">
                  Try a different search term
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="no-favorites"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 items-center justify-center"
            >
              <div className="text-center">
                <Heart className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-4 text-lg font-medium text-foreground">
                  No favorite recipes yet
                </p>
                <p className="text-muted-foreground">
                  Start adding recipes to your favorites
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Favorites;
