import React from "react";
import { Button, Flex, Title, Text, Box } from "@mantine/core";
import { auth } from "../firebase";

function Navbar({
  setIsAuthenticated,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const user = JSON.parse(localStorage.getItem("user")!);
  //@ts-ignore
  const name = user.displayName;

  const signOut = async () => {
    try {
      await auth.signOut();
      localStorage.setItem("token", "");
      localStorage.setItem("user", "");
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err);
    }
  };
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
      <Flex>
        <Flex mr={"20px"} mt={"4px"} gap={"2px"}>
          <Text size="lg" fw={600} color="blue">
            Hey,
          </Text>
          <Text size="lg" fw={500}>
            {name}
          </Text>
        </Flex>
        <Button variant="outline" onClick={signOut}>
          Log Out
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
