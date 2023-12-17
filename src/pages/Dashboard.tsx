import { Container, Modal, Flex, Button, Badge } from "@mantine/core";
import mockData from "../data/mockData";
import { useState } from "react";
import Filter from "../components/Filter";
import FinancialChart from "../components/Chart";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FinancialTable } from "../components/Table";
import { IconPhoto } from "@tabler/icons-react";

export function Dashboard() {
  const [filteredData, setFilteredData] = useState(mockData);
  const [opened, { open, close }] = useDisclosure(false);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <Container size={"responsive"}>
      <Flex gap="md" direction="row" align="center" mb={"50px"}>
        <Filter setFilteredData={setFilteredData} />
        <Flex
          direction={"row"}
          align="center"
          justify={"flex-end"}
          gap="md"
          style={{ flex: 1 }}
        >
          <Button
            leftSection={<IconPhoto size={14} />}
            variant="filled"
            onClick={open}
            color="blue"
          >
            {isSmallScreen ? `Show Chart` : `Visualize Chart for Raised Capital`}
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
