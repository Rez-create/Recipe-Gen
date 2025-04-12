
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
};

const RecipeCard = ({
  recipe,
  onViewDetails,
  isFavorite,
  onToggleFavorite,
}: RecipeCardProps) => {
  const { title, imageUrl, cookTime, difficulty, tags } = recipe;
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="recipe-card h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe);
          }}
          className="absolute top-2 right-2 bg-white dark:bg-card p-1.5 rounded-full shadow-md transition-transform hover:scale-110 active:scale-95"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={20}
            className={isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}
          />
        </button>
      </div>
      
      <CardContent className="flex-1 pt-4">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{cookTime} mins</span>
          <span>•</span>
          <span className="capitalize">{difficulty}</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => onViewDetails(recipe)}
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
