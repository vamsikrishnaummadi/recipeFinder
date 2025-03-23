
import { Recipe } from '@/utils/types';
import { Link } from 'react-router-dom';
import { Heart, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites';

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
  layout?: 'grid' | 'list';
}

export function RecipeCard({
  recipe,
  index = 0,
  layout = 'grid',
}: RecipeCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorited = isFavorite(recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  // Handle broken images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://spoonacular.com/recipeImages/default-food.jpg';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md ${
        layout === 'list' ? 'flex gap-4' : ''
      }`}
    >
      <Link
        to={`/recipe/${recipe.id}`}
        className={`block h-full ${layout === 'list' ? 'flex' : ''}`}
      >
        <div
          className={`relative overflow-hidden ${
            layout === 'list' ? 'w-1/3' : 'aspect-video w-full'
          }`}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            onError={handleImageError}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={handleFavoriteClick}
            className={`absolute right-2 top-2 rounded-full p-1.5 transition-colors ${
              favorited
                ? 'bg-white/80 text-red-500'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`}
            />
          </button>
          
          {recipe.diets && recipe.diets.length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <div className="flex flex-wrap gap-1">
                {recipe.diets.slice(0, 2).map((diet) => (
                  <span
                    key={diet}
                    className="inline-block rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                  >
                    {diet}
                  </span>
                ))}
                {recipe.diets.length > 2 && (
                  <span className="inline-block rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    +{recipe.diets.length - 2}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={`flex flex-col p-4 ${layout === 'list' ? 'flex-1' : ''}`}>
          <h3 className="line-clamp-2 font-medium text-base sm:text-lg">
            {recipe.title}
          </h3>
          
          <div className="mt-auto pt-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{recipe.readyInMinutes} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
