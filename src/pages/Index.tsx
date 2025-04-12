
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import IngredientInput from "@/components/IngredientInput";
import RecipeGrid from "@/components/RecipeGrid";
import RecipeDetail from "@/components/RecipeDetail";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/hooks/use-theme";
import { Recipe } from "@/types/recipe";
import { useToast } from "@/hooks/use-toast";
import {
  getRecipes,
  searchRecipes,
} from "@/services/recipeService";
import { generateRecipesFromIngredients } from "@/services/aiService";

const Index = () => {
  const { toast } = useToast();
  const { isDarkTheme, toggleTheme } = useTheme();
  
  // Navigation state
  const [activeTab, setActiveTab] = useState("home");
  
  // Recipe data state
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [aiGeneratedRecipes, setAiGeneratedRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [isGeneratingRecipes, setIsGeneratingRecipes] = useState(false);
  
  // Detail view state
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Load initial data
  useEffect(() => {
    const allRecipes = getRecipes();
    setRecipes(allRecipes);
    setFilteredRecipes(allRecipes);
    
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("recipe-gen-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);
  
  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("recipe-gen-favorites", JSON.stringify(favorites));
  }, [favorites]);
  
  const handleSearch = (query: string) => {
    const results = searchRecipes(query);
    setFilteredRecipes(results);
    setAiGeneratedRecipes([]);
  };
  
  /**
   * Handles the generation of recipes using the AI service
   * This function connects the UI with our AI recipe generation service
   */
  const handleGenerateRecipes = async (ingredients: string[]) => {
    try {
      console.log("Starting recipe generation process");
      setIsGeneratingRecipes(true);
      
      // Call our AI service to generate recipes based on ingredients
      // In production this would make a real API call to an AI model
      const generatedRecipes = await generateRecipesFromIngredients(ingredients);
      
      console.log("AI generation complete, recipes received:", generatedRecipes);
      
      if (generatedRecipes.length > 0) {
        // Update state with AI-generated recipes
        setAiGeneratedRecipes(generatedRecipes);
        toast({
          title: "Recipe created!",
          description: "AI-generated recipes have been created based on your ingredients.",
        });
      } else {
        setAiGeneratedRecipes([]);
        toast({
          title: "No recipes found",
          description: "Couldn't generate a recipe with these ingredients. Try adding more!",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Handle errors from the AI service
      console.error("Error generating recipes:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to generate recipes. Please try again.",
        variant: "destructive",
      });
      setAiGeneratedRecipes([]);
    } finally {
      setIsGeneratingRecipes(false);
    }
  };
  
  const handleViewDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDetailOpen(true);
  };
  
  const handleCloseDetails = () => {
    setIsDetailOpen(false);
  };
  
  const handleToggleFavorite = (recipe: Recipe) => {
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
      toast({
        description: `${recipe.title} removed from favorites`,
      });
    } else {
      setFavorites([...favorites, recipe]);
      toast({
        description: `${recipe.title} added to favorites`,
      });
    }
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <IngredientInput 
              onGenerate={handleGenerateRecipes} 
              isLoading={isGeneratingRecipes}
            />
            <h2 className="text-xl font-semibold mb-4">
              {isGeneratingRecipes ? "Generating Recipes..." : aiGeneratedRecipes.length > 0 ? "AI Generated Recipes" : "Suggested Recipes"}
            </h2>
            <RecipeGrid
              recipes={aiGeneratedRecipes.length > 0 ? aiGeneratedRecipes : filteredRecipes}
              favorites={favorites}
              onViewDetails={handleViewDetails}
              onToggleFavorite={handleToggleFavorite}
              isLoading={isGeneratingRecipes}
            />
          </>
        );
      case "recipes":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">All Recipes</h2>
            <RecipeGrid
              recipes={recipes}
              favorites={favorites}
              onViewDetails={handleViewDetails}
              onToggleFavorite={handleToggleFavorite}
            />
          </>
        );
      case "favorites":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">My Favorites</h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">No favorites yet</p>
                <p className="text-sm text-muted-foreground">
                  Save your favorite recipes by clicking the heart icon
                </p>
              </div>
            ) : (
              <RecipeGrid
                recipes={favorites}
                favorites={favorites}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
              />
            )}
          </>
        );
      case "settings":
        return (
          <div className="py-4">
            <h2 className="text-xl font-semibold mb-6">Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark theme
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    isDarkTheme ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                      isDarkTheme ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              
              <div>
                <h3 className="font-medium">About RecipeGen</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Version 1.0.0
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  RecipeGen helps you discover delicious recipes using ingredients you already have at home.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        onSearch={handleSearch}
      />
      
      <main className="container max-w-6xl py-4 px-4">
        {renderContent()}
      </main>
      
      <Navbar activeTab={activeTab} onChangeTab={setActiveTab} />
      
      <RecipeDetail
        recipe={selectedRecipe}
        isOpen={isDetailOpen}
        onClose={handleCloseDetails}
        isFavorite={
          selectedRecipe
            ? favorites.some((fav) => fav.id === selectedRecipe.id)
            : false
        }
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default Index;
