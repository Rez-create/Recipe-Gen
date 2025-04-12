
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type IngredientInputProps = {
  onGenerate: (ingredients: string[]) => void;
  isLoading?: boolean;
};

const IngredientInput = ({ onGenerate, isLoading = false }: IngredientInputProps) => {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredient.trim() && !ingredients.includes(ingredient.trim())) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleGenerate = () => {
    if (ingredients.length > 0) {
      onGenerate(ingredients);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl">What's in your kitchen?</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddIngredient} className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Enter an ingredient..."
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="sm">
            <Plus size={18} />
            <span className="ml-1">Add</span>
          </Button>
        </form>

        <div className="flex flex-wrap gap-2 mb-4">
          {ingredients.length === 0 ? (
            <p className="text-muted-foreground text-sm italic">
              Add ingredients to find matching recipes
            </p>
          ) : (
            ingredients.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1.5"
              >
                {item}
                <button
                  onClick={() => handleRemoveIngredient(item)}
                  className="ml-1"
                  aria-label={`Remove ${item}`}
                >
                  <X size={14} />
                </button>
              </Badge>
            ))
          )}
        </div>

        <Button
          onClick={handleGenerate}
          className="w-full"
          variant="default"
          disabled={ingredients.length === 0 || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Find Recipes"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default IngredientInput;
