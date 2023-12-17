import {
  Container,
  Modal,
  Flex,
  Button,
  Badge,
} from "@mantine/core";
import mockData from "../data/mockData";
import { useState } from "react";
import Filter from "../components/Filter";
import FinancialChart from "../components/Chart";
import { useDisclosure } from "@mantine/hooks";
import { FinancialTable } from "../components/Table";
import { IconPhoto } from "@tabler/icons-react";

export function Dashboard() {
  const [filteredData, setFilteredData] = useState(mockData);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container p={"30px"} size={"responsive"}>
      <Flex gap="md" direction="row" align="center" mb={"30px"}>
        <Filter setFilteredData={setFilteredData} />
        <Flex
          direction={"row"}
          align="center"
          justify={"flex-end"}
          gap="md"
          style={{ flex: 1 }}
        >
          <Badge color="blue">Visualize Raised Capital of Companies</Badge>
          <Button
            leftSection={<IconPhoto size={14} />}
            variant="default"
            onClick={open}
          >
            Generate Chart
          </Button>
        </Flex>
      </Flex>

      <Modal
        size="xl"
        centered
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <FinancialChart data={filteredData} />
      </Modal>
      <FinancialTable filteredData={filteredData} />
    </Container>
  );
}
