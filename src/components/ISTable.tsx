import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface IncomeStatement {
    [year: string]: {
      concept: string;
      label: string;
      unit: string;
      value: number;
    }[];
  }

  export default function ISTable({ stock }: { stock: IncomeStatement }) {
   
  const years =  stock["2021"];

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Income Statement</TableHeaderCell>
            <TableHeaderCell>2021 (in millions)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {years.map((stock) => (
            <TableRow key={stock.concept}>
              <TableCell>{stock.label.slice(0,50)}</TableCell>
              <TableCell>
                <Text>{(stock.value / 1000000).toFixed(1)}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }