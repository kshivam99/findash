import { Table, ScrollArea, Anchor } from "@mantine/core";
import { FinData } from "../types";

export function FinancialTable({ filteredData }: { filteredData: FinData[] }) {
  const rows = filteredData.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td style={{ textAlign: "left" }}>{row.companyName}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.raisedCapital}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.turnover}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.netProfit}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.loanAmount}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.loanInterest}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.accountStatus}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.contactEmail}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>
          <Anchor href={row.companyWebsite} target="_blank">
            {row.companyWebsite}
          </Anchor>
        </Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{row.address}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company</Table.Th>
            <Table.Th>Raised Capital (Million $)</Table.Th>
            <Table.Th>Turnover</Table.Th>
            <Table.Th>Net Profit</Table.Th>
            <Table.Th>Loan Amount</Table.Th>
            <Table.Th>Loan Interest</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Contact Email</Table.Th>
            <Table.Th>Company Website</Table.Th>
            <Table.Th>Address</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
