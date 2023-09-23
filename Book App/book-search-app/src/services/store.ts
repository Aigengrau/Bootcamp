import create from "zustand";
import { Book } from "./types"; 

type State = {
  books: Book[];
  searchQuery: string;
  category: string;
  sortBy: string;
  startIndex: number;
  totalItems: number;
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setSortBy: (sortBy: string) => void;
  setBooks: (books: Book[]) => void;
  setStartIndex: (startIndex: number) => void;
  setTotalItems: (totalItems: number) => void;
  resetPagination: () => void;
};

export const useStore = create<State>((set) => ({
  books: [],
  searchQuery: "",
  category: "all",
  sortBy: "relevance",
  startIndex: 0,
  totalItems: 0,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
  setBooks: (books) => set((state) => ({ books: [...state.books, ...books] })),
  setStartIndex: (startIndex) => set({ startIndex }),
  setTotalItems: (totalItems) => set({ totalItems }),
  resetPagination: () => set({ startIndex: 0, totalItems: 0 }),
}));
