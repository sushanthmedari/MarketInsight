"use client";

import { useStore } from "@/store";
import { Fragment, useEffect } from "react";
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
      {/* <Title>
      MarketInsight
      </Title> */}

      <div className="inline-block">
        <DropDown />
      </div>
      <div className="mt-14">
        <Card className="-z-30">
          {stock.length !== 0 ? (
                   <><Title className="flex justify-center">Here is your stock</Title>
                   <BSTable stock={stock[0]?.bs} />
                 </>
          ) : (
            <Text>View the 2021 balance sheet for a stock on the NASDAQ or NYSE. 
                  Application is still in development, so some search querys might return nothing.
            </Text>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Home;
