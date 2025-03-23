
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeDetail } from '@/components/RecipeDetail';
import { RecipeCard } from '@/components/RecipeCard';
import { getRecipeById, getRecipeRecommendations } from '@/utils/api';
import { Recipe } from '@/utils/types';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const RecipeView = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadRecipe() {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getRecipeById(id);
        setRecipe(data);
        
        // Load recommendations after loading the main recipe
        const recommendations = await getRecipeRecommendations();
        setRecommendations(recommendations.filter(rec => rec.id !== id).slice(0, 3));
      } catch (err) {
        console.error('Error loading recipe:', err);
        setError('Failed to load recipe. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadRecipe();
    // Scroll to the top when the recipe changes
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>

      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading recipe...</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Something went wrong
            </p>
            <p className="text-muted-foreground">{error}</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : recipe ? (
        <>
          <RecipeDetail recipe={recipe} />

          {recommendations.length > 0 && (
            <section className="my-12">
              <h2 className="mb-6 text-xl font-semibold">
                You might also like
              </h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Recipe not found
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeView;
