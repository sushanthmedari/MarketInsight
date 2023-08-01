"use client";

import { useStore } from "@/store";
import { Fragment, useEffect } from "react";
import DropDown from "@/components/DropDown";
import { Text, Card, Title } from "@tremor/react";
import BSTable from "@/components/BSTable";
import NewsCard from "@/components/NewsCard";

const Home: React.FC = () => {
  const stock = useStore((state) => state.stock);
  const fetchStock = useStore((state) => state.fetchStock);
  const stockName = useStore((state) => state.stockName);

  useEffect(() => {
    fetchStock();
  }, []);

  // Replaces stock name when the stock name is unavailable.
  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="inline-block">
        <DropDown />
      </div>
      <div className="mt-14">
        <Card className="-z-30">
          {stock.length !== 0 &&
          stock[0]?.bs &&
          typeof stock[0]?.bs["2021"] !== "undefined" ? (
            <>
              <Title className="flex justify-center">{stockName.name}</Title>
              <BSTable stock={stock[0]?.bs} />
            </>
          ) : (
            <Text>
              View the 2021 balance sheet for a stock on the NASDAQ or NYSE.
              This application is still in development, so search querys might
              sometimes return nothing.
            </Text>
          )}
        </Card>
        <div className="my-14">
          {stock.length !== 0 &&
          stock[0]?.bs &&
          typeof stock[0]?.bs["2021"] !== "undefined" ? (
            <>
              <Title className="flex justify-center mb-10">
                Latest News about {stockName.name}
              </Title>
              <NewsCard news={stock[0]?.news} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
