export type User = {
  id: string;
  name: string;
  email: string;
};

export type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  currency?: string;
  stock?: number;
  coverUrl?: string;
  categories?: string[];
  ratingAvg?: number;
};
