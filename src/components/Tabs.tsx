import {
  Card,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";

import BSTable from "@/components/BSTable";
import ISTable from "@/components/ISTable";
import CFTable from "@/components/CFTable";

import { StockData } from "@/store";

export default function Tabs({ stock }: { stock: StockData[] }){
  return (
    <Card>
      <TabGroup>
        <TabList className="mt-8">
          <Tab>Balance Sheet</Tab>
          <Tab>Income Statement</Tab>
          <Tab>Cash Flow</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10">
              <BSTable stock={stock[0]?.bs} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <ISTable stock={stock[0]?.ic} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <CFTable stock={stock[0]?.cf} />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};
