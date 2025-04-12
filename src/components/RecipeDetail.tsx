
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, HeartIcon, ChefHat, ArrowLeft, Star } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type RecipeDetailProps = {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
};

const RecipeDetail = ({
  recipe,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}: RecipeDetailProps) => {
  if (!recipe) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 top-4"
            onClick={onClose}
          >
            <ArrowLeft />
          </Button>
          <div className="mt-6 mb-2">
            <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-3 mt-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{recipe.cookTime} mins</span>
              </div>
              <div className="flex items-center">
                <ChefHat size={16} className="mr-1" />
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-1 fill-amber-400 text-amber-400" />
                <span>{recipe.rating}</span>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="relative mb-4 rounded-md overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full aspect-video object-cover"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm border-none"
            onClick={() => onToggleFavorite(recipe)}
          >
            <HeartIcon
              size={20}
              className={isFavorite ? "fill-primary text-primary" : ""}
            />
          </Button>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Tabs defaultValue="ingredients">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="mt-0">
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="instructions" className="mt-0">
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white font-medium text-sm mr-3">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button onClick={() => onToggleFavorite(recipe)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetail;
