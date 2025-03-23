
export interface Recipe {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  summary: string;
  instructions: string;
  extendedIngredients: Ingredient[];
  diets: string[];
  dishTypes: string[];
  analyzedInstructions?: AnalyzedInstruction[];
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
  image?: string;
}

export interface Equipment {
  id: number;
  name: string;
  image?: string;
}

export interface SearchFilters {
  query: string;
  diet?: string;
  mealType?: string;
  maxReadyTime?: number;
  sort?: string;
}

export type SortOption = 'popularity' | 'time' | 'calories';
