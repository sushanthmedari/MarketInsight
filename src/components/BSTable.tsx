import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  type FinancialDataEntry = {
    concept: string;
    label: string;
    unit: string;
    value: number;
  };

  interface BalanceSheet {
    [year: string]: {
      concept: string;
      label: string;
      unit: string;
      value: number;
    }[];
  }

  interface StockData {
    bs: {
      [year: string]: {
        concept: string;
        label: string;
        unit: string;
        value: number;
      }[];
    };
    // cf: {
    //   [year: string]: {
    //     concept: string;
    //     label: string;
    //     unit: string;
    //     value: number;
    //   }[];
    // };
    // ic: {
    //   [year: string]: {
    //     concept: string;
    //     label: string;
    //     unit: string;
    //     value: number;
    //   }[];
    // };
  }
  
  export default function BSTable({ stock }: { stock: BalanceSheet }) {
    // const years = Object.keys(stock[0]?.bs || {});
    // {years.map((year) => (
    //   <TableHeaderCell key={year}>{year}</TableHeaderCell>
    // ))}

  const years = stock["2021"].length > 0 ?  stock["2021"] : stock["2020"];

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Balance Sheet</TableHeaderCell>
            <TableHeaderCell>2021 (in millions)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {years.map((stock) => (
            <TableRow key={stock.concept}>
              <TableCell>{stock.label.slice(0,50)}</TableCell>
              <TableCell>
                <Text>{(stock.value / 1000000)}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }