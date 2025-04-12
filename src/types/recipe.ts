
export type Recipe = {
  id: string;
  title: string;
  imageUrl: string;
  cookTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  rating: number;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
};
