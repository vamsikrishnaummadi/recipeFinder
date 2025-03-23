
import { useState } from 'react';
import { SearchFilters } from '@/utils/types';
import { Filter, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterSectionProps {
  onFilterChange: (filters: Partial<SearchFilters>) => void;
  className?: string;
}

export function FilterSection({ onFilterChange, className = '' }: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDiet, setSelectedDiet] = useState<string | undefined>(undefined);
  const [selectedMealType, setSelectedMealType] = useState<string | undefined>(undefined);
  const [maxReadyTime, setMaxReadyTime] = useState<number | undefined>(undefined);
  const [sortOption, setSortOption] = useState<string | undefined>(undefined);

  const dietOptions = [
    { value: '', label: 'Any' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten Free' },
    { value: 'dairy-free', label: 'Dairy Free' },
  ];

  const mealTypeOptions = [
    { value: '', label: 'Any' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'main course', label: 'Main Course' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'appetizer', label: 'Appetizer' },
    { value: 'salad', label: 'Salad' },
    { value: 'soup', label: 'Soup' },
  ];

  const timeOptions = [
    { value: undefined, label: 'Any Time' },
    { value: 15, label: '15 minutes or less' },
    { value: 30, label: '30 minutes or less' },
    { value: 60, label: '1 hour or less' },
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'time', label: 'Preparation Time' },
    { value: 'calories', label: 'Calories' },
  ];

  const handleDietChange = (diet: string) => {
    setSelectedDiet(diet || undefined);
    onFilterChange({ diet: diet || undefined });
  };

  const handleMealTypeChange = (mealType: string) => {
    setSelectedMealType(mealType || undefined);
    onFilterChange({ mealType: mealType || undefined });
  };

  const handleTimeChange = (time: number | undefined) => {
    setMaxReadyTime(time);
    onFilterChange({ maxReadyTime: time });
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
    onFilterChange({ sort });
  };

  const handleReset = () => {
    setSelectedDiet(undefined);
    setSelectedMealType(undefined);
    setMaxReadyTime(undefined);
    setSortOption('popularity');
    onFilterChange({
      diet: undefined,
      mealType: undefined,
      maxReadyTime: undefined,
      sort: 'popularity',
    });
  };

  return (
    <div className={`bg-white rounded-lg border p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-medium">Filters</h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? 'Hide' : 'Show'} options
          <ChevronDown
            className={`h-3 w-3 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Dietary Preferences */}
              <div className="space-y-2">
                <label className="text-xs font-medium">Dietary Preferences</label>
                <select
                  value={selectedDiet || ''}
                  onChange={(e) => handleDietChange(e.target.value)}
                  className="w-full rounded-md border bg-transparent px-3 py-1.5 text-sm"
                >
                  {dietOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Meal Type */}
              <div className="space-y-2">
                <label className="text-xs font-medium">Meal Type</label>
                <select
                  value={selectedMealType || ''}
                  onChange={(e) => handleMealTypeChange(e.target.value)}
                  className="w-full rounded-md border bg-transparent px-3 py-1.5 text-sm"
                >
                  {mealTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preparation Time */}
              <div className="space-y-2">
                <label className="flex items-center gap-1 text-xs font-medium">
                  <Clock className="h-3 w-3" /> Preparation Time
                </label>
                <select
                  value={maxReadyTime?.toString() || ''}
                  onChange={(e) =>
                    handleTimeChange(
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  className="w-full rounded-md border bg-transparent px-3 py-1.5 text-sm"
                >
                  {timeOptions.map((option) => (
                    <option
                      key={option.label}
                      value={option.value?.toString() || ''}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <label className="text-xs font-medium">Sort By</label>
                <select
                  value={sortOption || 'popularity'}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full rounded-md border bg-transparent px-3 py-1.5 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleReset}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Reset filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
