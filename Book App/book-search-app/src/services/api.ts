import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

interface SearchParams {
  query: string;
  startIndex: number;
  maxResults: number;
  category: string;
  orderBy: string;
}

export const searchBooks = async ({
  query,
  startIndex,
  maxResults,
  category,
  orderBy,
}: SearchParams) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: category === "all" ? query : `${query}+subject:${category}`,
        startIndex,
        maxResults,
        orderBy,
        key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBookDetails = async (bookId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${bookId}`, {
      params: {
        key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
