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
}

type StockInput = {
  title: string;
};

type StockStore = {
  stock: StockData[];
  fetchStock: () => void;
  addStock: (stock: StockInput) => void;
};

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

export const useStore = create<StockStore>((set) => ({
  stock: [],
  fetchStock: async () => {
    try {
      const response = await fetch(`${URL}/stocks`);
      const stock = await response.json();
      set({ stock });
      console.log(stock);
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
      set({ stock: [createdStock] }); // Overwrite existing stock with the new one
    } catch (error) {
      console.error("Error creating stock:", error);
    }
  },
}));

 