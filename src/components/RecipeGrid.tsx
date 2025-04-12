
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";
import { Loader2 } from "lucide-react";

type RecipeGridProps = {
  recipes: Recipe[];
  favorites: Recipe[];
  onViewDetails: (recipe: Recipe) => void;
  onToggleFavorite: (recipe: Recipe) => void;
  isLoading?: boolean;
};

const RecipeGrid = ({
  recipes,
  favorites,
  onViewDetails,
  onToggleFavorite,
  isLoading = false,
}: RecipeGridProps) => {
  const isFavorite = (recipe: Recipe) =>
    favorites.some((fav) => fav.id === recipe.id);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Generating recipes based on your ingredients...</p>
        <p className="text-sm text-muted-foreground mt-2">
          This might take a moment
        </p>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground mb-2">No recipes found</p>
        <p className="text-sm text-muted-foreground">
          Try adding more ingredients or adjusting your search
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onViewDetails={onViewDetails}
          isFavorite={isFavorite(recipe)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeGrid;
