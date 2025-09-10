import type { Book } from "../types";

const placeholder = (seed: number) =>
  `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=${seed}`;

export const books: Book[] = [
  {
    _id: "1",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "A deep dive into data systems, storage, and design paradigms for building robust services.",
    price: 585.99,
    coverUrl: placeholder(1),
    stock: 12,
    categories: ["Databases", "Architecture"],
    ratingAvg: 4.8
  },
  {
    _id: "2",
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    description: "Practical techniques for cleaning up code and improving design.",
    price: 435.99,
    coverUrl: placeholder(2),
    stock: 8,
    categories: ["Software", "Programming"],
    ratingAvg: 4.7
  },
  {
    _id: "3",
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    description: "A deep understanding of JavaScript and its quirks.",
    price: 280.5,
    coverUrl: placeholder(3),
    stock: 4,
    categories: ["Programming", "JavaScript"],
    ratingAvg: 4.6
  },
  {
    _id: "4",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description: "Principles of robust architecture and maintainable systems.",
    price: 355.0,
    coverUrl: placeholder(4),
    stock: 7,
    categories: ["Architecture", "Software"],
    ratingAvg: 4.5
  },
  {
    _id: "5",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    description: "Practical advice for modern software craftsmanship.",
    price: 199.99,
    coverUrl: placeholder(5),
    stock: 10,
    categories: ["Programming", "Career"],
    ratingAvg: 4.9
  }
];
