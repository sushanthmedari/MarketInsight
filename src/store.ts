import { create } from "zustand";

interface StockData {
  bs: {
    [year: string]: {
      concept: string;
      label: string;
      unit: string;
      value: number;
    }[];
  };
  cf: {
    [year: string]: {
      concept: string;
      label: string;
      unit: string;
      value: number;
    }[];
  };
  ic: {
    [year: string]: {
      concept: string;
      label: string;
      unit: string;
      value: number;
    }[];
  };
  news: Article[];
}

type StockInput = {
  title: string;
};

interface StockInfo {
  ticker: string;
  name: string; 
  is_etf: null | boolean;
  exchange: string;
}

interface Article {
  author: string;
  content: string;
  created_at: string;
  headline: string;
  id: number;
  images: Image[];
  source: string;
  summary: string;
  symbols: string[];
  updated_at: string;
  url: string;
}

interface Image {
  size: "large" | "small" | "thumb";
  url: string;
}


type StockStore = {
  stock: StockData[];
  stockName: StockInfo; 
  fetchStock: () => void;
  addStock: (stock: StockInput) => void;
  setSelectedStock: (selected: StockInfo) => void;

};

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

export const useStore = create<StockStore>((set) => ({
  stock: [],
  stockName: {ticker: "",
  name: "", 
  is_etf: null,
  exchange: ""},
  fetchStock: async () => {
    try {
      const response = await fetch(`${URL}/stocks`);
      const stock = await response.json();
      set({ stock });
    } catch (error) {
      console.error("Error fetching stock:", error);
    }
  },
  addStock: async (stock) => {
    try {
      const response = await fetch(`${URL}/stocks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stock),
      });
      const createdStock = await response.json();
      // set((state) => ({ stock: [...state.stock, createdStock] }));
      if(Object.keys(createdStock.bs).length === 0){
        return;
      }
      set({ stock: [createdStock] });  
    } catch (error) {
      console.error("Error creating stock:", error);
    }
  },
  setSelectedStock: (selected) => set({ stockName: selected }),  
}));

 