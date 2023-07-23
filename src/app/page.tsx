"use client";

import { useStore } from "@/store";
import { useEffect } from "react";
import DropDown from "@/components/DropDown";
import { Text, Card, Title } from "@tremor/react";
import BSTable from "@/components/BSTable";

const Home: React.FC = () => {
  const stock = useStore((state) => state.stock);
  const fetchStock = useStore((state) => state.fetchStock);

  useEffect(() => {
    fetchStock();
  }, []);

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>
        View the 2021 balance sheet for any stock on the NASDAQ or NYSE
      </Title>

      <div className="inline-block">
        <DropDown />
      </div>
      <div className="mt-14">
        <Card className="-z-30">
          {stock.length !== 0 ? (
            <BSTable stock={stock[0]?.bs} />
          ) : (
            <Text>Search for a stock</Text>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Home;
