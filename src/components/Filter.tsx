import { Container, Select } from "@mantine/core";
import React from "react";
import { FinData } from "../types";

function Filter({
  setFilteredData,
}: {
  setFilteredData: React.Dispatch<React.SetStateAction<FinData[]>>;
}) {
  return (
    <Container>
      <Select
        label="Filter Data by"
        placeholder="Select"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
    </Container>
  );
}

export default Filter;

