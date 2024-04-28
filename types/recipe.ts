export type Recipe = {
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
  ingredients: { name: string; quantity: number }[];
  instructions: string;
};
