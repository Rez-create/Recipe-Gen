
import { Recipe } from "@/types/recipe";

// Sample recipe data
const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Garlic Pasta with Roasted Tomatoes",
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2232&auto=format&fit=crop",
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    rating: 4.7,
    tags: ["pasta", "vegetarian", "quick"],
    ingredients: [
      "8 oz pasta",
      "3 tbsp olive oil",
      "4 garlic cloves, minced",
      "1 cup cherry tomatoes",
      "1/2 cup heavy cream",
      "1/3 cup grated parmesan",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions. Reserve 1/2 cup pasta water before draining.",
      "Heat olive oil in a large skillet over medium heat. Add cherry tomatoes and cook until they begin to burst, about 5 minutes.",
      "Add minced garlic and cook for 1 minute until fragrant.",
      "Reduce heat and stir in heavy cream and parmesan cheese until smooth.",
      "Add cooked pasta to the sauce and toss to coat. Add pasta water as needed to thin the sauce.",
      "Season with salt and pepper. Garnish with fresh basil before serving."
    ],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 48,
      fat: 22
    }
  },
  {
    id: "2",
    title: "Honey Soy Glazed Salmon",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    cookTime: 20,
    servings: 2,
    difficulty: "easy",
    rating: 4.8,
    tags: ["seafood", "gluten-free", "high-protein"],
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "2 garlic cloves, minced",
      "1 tsp grated ginger",
      "Sesame seeds and green onions for garnish"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "In a small bowl, whisk together honey, soy sauce, rice vinegar, garlic, and ginger.",
      "Place salmon fillets on a baking sheet lined with parchment paper.",
      "Pour half the glaze over the salmon and reserve the rest.",
      "Bake for 15-18 minutes until salmon is cooked through.",
      "Drizzle with remaining glaze and garnish with sesame seeds and sliced green onions."
    ],
    nutrition: {
      calories: 380,
      protein: 34,
      carbs: 24,
      fat: 16
    }
  },
  {
    id: "3",
    title: "Chickpea and Vegetable Curry",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
    cookTime: 30,
    servings: 4,
    difficulty: "medium",
    rating: 4.5,
    tags: ["vegan", "curry", "gluten-free"],
    ingredients: [
      "2 cans chickpeas, drained and rinsed",
      "1 onion, diced",
      "2 carrots, diced",
      "1 bell pepper, diced",
      "2 tbsp curry powder",
      "1 can coconut milk",
      "1 cup vegetable broth",
      "2 tbsp olive oil",
      "Fresh cilantro",
      "Salt to taste"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat. Add onions and cook until translucent.",
      "Add carrots and bell pepper, cook for 5 minutes until softened.",
      "Stir in curry powder and cook for 1 minute until fragrant.",
      "Add chickpeas, coconut milk, and vegetable broth. Bring to a simmer.",
      "Cook for 15-20 minutes until vegetables are tender and flavors meld.",
      "Season with salt to taste and garnish with fresh cilantro."
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 42,
      fat: 14
    }
  },
  {
    id: "4",
    title: "Avocado and Black Bean Quesadillas",
    imageUrl: "https://images.unsplash.com/photo-1618040996337-56904b7850b4?q=80&w=1964&auto=format&fit=crop",
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    rating: 4.6,
    tags: ["mexican", "vegetarian", "quick"],
    ingredients: [
      "4 flour tortillas",
      "1 can black beans, drained and rinsed",
      "1 avocado, sliced",
      "1 cup shredded cheese",
      "1/2 red onion, thinly sliced",
      "Fresh cilantro",
      "Lime wedges",
      "Sour cream (optional)"
    ],
    instructions: [
      "Heat a large skillet over medium heat.",
      "Place one tortilla in the skillet. Add a layer of cheese, black beans, avocado slices, and red onion.",
      "Top with another tortilla and press down gently.",
      "Cook for 2-3 minutes until golden brown, then flip and cook the other side.",
      "Repeat with remaining ingredients to make second quesadilla.",
      "Cut into wedges and serve with cilantro, lime wedges, and sour cream."
    ],
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 52,
      fat: 22
    }
  },
  {
    id: "5",
    title: "Spinach and Mushroom Frittata",
    imageUrl: "https://images.unsplash.com/photo-1623595119708-26b1f7500dec?q=80&w=1986&auto=format&fit=crop",
    cookTime: 25,
    servings: 4,
    difficulty: "medium",
    rating: 4.4,
    tags: ["breakfast", "vegetarian", "keto", "gluten-free"],
    ingredients: [
      "8 large eggs",
      "1/4 cup milk",
      "2 cups fresh spinach",
      "1 cup mushrooms, sliced",
      "1/2 onion, diced",
      "1/2 cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a bowl, whisk together eggs, milk, salt, and pepper.",
      "Heat olive oil in an oven-safe skillet over medium heat. Add onions and cook until softened.",
      "Add mushrooms and cook until they release their moisture.",
      "Add spinach and cook until wilted.",
      "Pour egg mixture over the vegetables. Sprinkle feta cheese on top.",
      "Cook for 3-4 minutes until edges begin to set, then transfer to oven.",
      "Bake for 12-15 minutes until eggs are fully set and slightly golden on top."
    ],
    nutrition: {
      calories: 290,
      protein: 20,
      carbs: 6,
      fat: 22
    }
  },
  {
    id: "6",
    title: "Lemon Herb Roasted Chicken",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2076&auto=format&fit=crop",
    cookTime: 55,
    servings: 4,
    difficulty: "medium",
    rating: 4.9,
    tags: ["dinner", "high-protein", "gluten-free"],
    ingredients: [
      "1 whole chicken (4-5 lbs)",
      "2 lemons",
      "4 garlic cloves",
      "2 tbsp olive oil",
      "1 tbsp fresh rosemary, chopped",
      "1 tbsp fresh thyme, chopped",
      "Salt and pepper to taste",
      "1 cup chicken broth"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Pat chicken dry with paper towels. Season cavity with salt and pepper.",
      "Slice one lemon and place inside the cavity along with garlic cloves.",
      "In a small bowl, mix olive oil, herbs, juice from second lemon, salt, and pepper.",
      "Rub the herb mixture all over the chicken.",
      "Place chicken in a roasting pan and pour chicken broth in the bottom of the pan.",
      "Roast for 45-55 minutes until internal temperature reaches 165°F (74°C).",
      "Let rest for 10 minutes before carving."
    ],
    nutrition: {
      calories: 380,
      protein: 48,
      carbs: 3,
      fat: 20
    }
  }
];

export const getRecipes = (): Recipe[] => {
  return mockRecipes;
};

export const searchRecipes = (query: string): Recipe[] => {
  if (!query) return mockRecipes;
  
  const lowerCaseQuery = query.toLowerCase();
  return mockRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(lowerCaseQuery) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseQuery)
      )
    );
  });
};

export const filterRecipesByIngredients = (ingredients: string[]): Recipe[] => {
  if (ingredients.length === 0) return mockRecipes;
  
  const lowerCaseIngredients = ingredients.map((ing) => ing.toLowerCase());
  
  return mockRecipes.filter((recipe) => {
    // Check if the recipe contains at least one of the provided ingredients
    return recipe.ingredients.some((recipeIng) => {
      return lowerCaseIngredients.some((ing) =>
        recipeIng.toLowerCase().includes(ing)
      );
    });
  });
};

export const filterRecipesByDiet = (dietType: string): Recipe[] => {
  if (dietType === "all") return mockRecipes;
  
  return mockRecipes.filter((recipe) => 
    recipe.tags.includes(dietType.toLowerCase())
  );
};
