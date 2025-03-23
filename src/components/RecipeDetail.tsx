
import { Recipe } from '@/utils/types';
import { motion } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites';
import {
  Heart,
  Clock,
  Users,
  ExternalLink,
  Share2,
  Check,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface RecipeDetailProps {
  recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>(
    'ingredients'
  );
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const { toast } = useToast();
  const favorited = isFavorite(recipe.id);

  const handleFavoriteClick = () => {
    if (favorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe: ${recipe.title}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied",
          description: "Recipe link copied to clipboard",
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Sanitize and parse HTML for summary and instructions
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  // Handle broken images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://spoonacular.com/recipeImages/default-food.jpg';
  };

  // Limit the ingredients shown initially
  const visibleIngredients = showAllIngredients
    ? recipe.extendedIngredients
    : recipe.extendedIngredients.slice(0, 8);

  const ingredientsToShow = showAllIngredients
    ? recipe.extendedIngredients
    : recipe.extendedIngredients.slice(0, 8);
  const hasMoreIngredients = recipe.extendedIngredients.length > 8;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            onError={handleImageError}
            className="h-64 w-full object-cover sm:h-96"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <div className="absolute bottom-0 w-full p-6">
              <div className="space-y-2">
                {recipe.diets && recipe.diets.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {recipe.diets.map((diet) => (
                      <span
                        key={diet}
                        className="inline-block rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  {recipe.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                <span>{recipe.readyInMinutes} minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleFavoriteClick}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
                  favorited
                    ? 'bg-red-50 text-red-500'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Heart
                  className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`}
                />
                <span>{favorited ? 'Favorited' : 'Favorite'}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 rounded-full bg-muted px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted/80"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              {recipe.sourceUrl && (
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-muted px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted/80"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Source</span>
                </a>
              )}
            </div>
          </div>

          {recipe.summary && (
            <div className="mb-6">
              <div
                className="prose prose-sm max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={createMarkup(recipe.summary)}
              />
            </div>
          )}

          <div className="mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`flex flex-1 items-center justify-center border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'ingredients'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('instructions')}
                className={`flex flex-1 items-center justify-center border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'instructions'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Instructions
              </button>
            </div>

            <div className="mt-6">
              {activeTab === 'ingredients' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {ingredientsToShow.map((ingredient, index) => (
                      <motion.li
                        key={ingredient.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2 rounded-lg border border-muted p-3"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border">
                          <Check className="h-3 w-3 text-primary opacity-50" />
                        </div>
                        <div>
                          <p className="font-medium">{ingredient.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {ingredient.amount} {ingredient.unit}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {hasMoreIngredients && (
                    <button
                      onClick={() => setShowAllIngredients(!showAllIngredients)}
                      className="flex w-full items-center justify-center gap-1 rounded-md bg-muted py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/80"
                    >
                      {showAllIngredients ? 'Show Less' : 'Show All Ingredients'}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          showAllIngredients ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </motion.div>
              )}

              {activeTab === 'instructions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {recipe.analyzedInstructions &&
                  recipe.analyzedInstructions.length > 0 ? (
                    recipe.analyzedInstructions.map((instruction, idx) => (
                      <div key={idx} className="space-y-4">
                        {instruction.name && (
                          <h3 className="font-medium">{instruction.name}</h3>
                        )}
                        <ol className="space-y-4">
                          {instruction.steps.map((step) => (
                            <motion.li
                              key={step.number}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: step.number * 0.05 }}
                              className="flex gap-4"
                            >
                              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                                {step.number}
                              </div>
                              <div className="pt-0.5">
                                <p>{step.step}</p>
                                {(step.ingredients.length > 0 ||
                                  step.equipment.length > 0) && (
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {step.ingredients.map((ingredient) => (
                                      <span
                                        key={ingredient.id}
                                        className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                                      >
                                        {ingredient.name}
                                      </span>
                                    ))}
                                    {step.equipment.map((equipment) => (
                                      <span
                                        key={equipment.id}
                                        className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                                      >
                                        {equipment.name}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.li>
                          ))}
                        </ol>
                      </div>
                    ))
                  ) : recipe.instructions ? (
                    <div
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(recipe.instructions)}
                    />
                  ) : (
                    <p className="text-center text-muted-foreground">
                      No instructions available for this recipe.
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
