import React from "react";
import { Button, Flex, Title } from "@mantine/core";

function Navbar() {
  return (
    <Flex
      align={"center"}
      justify="space-between"
      px={"24px"}
      py="20px"
      mb={"30px"}
    >
      <Flex>
        <Title c="blue" order={1} fw={700}>
          Fin
        </Title>
        <Title order={1} fw={700}>
          Dash
        </Title>
      </Flex>
      <Button variant="outline">Log Out</Button>
    </Flex>
  );
}

export default Navbar;
