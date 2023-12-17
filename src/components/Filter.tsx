import {
  Badge,
  Box,
  Flex,
  RangeSlider,
  Select,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import mockData from "../data/mockData";
import { FinData } from "../types";
import { convertToCamelCase } from "../utils";

const OPTIONS = [
  "Company Name",
  "Address",
  "Number Of Employees",
  "Raised Capital",
  "Turnover",
  "Net Profit",
  "Contact Number",
  "Contact Email",
  "Company Website",
  "Loan Amount",
  "Loan Interest",
  "Account Status",
];

const RangeKeys = [
  "Raised Capital",
  "Turnover",
  "Net Profit",
  "Loan Amount",
  "Loan Interest",
];

function Filter({
  setFilteredData,
}: {
  setFilteredData: React.Dispatch<React.SetStateAction<FinData[]>>;
}) {
  const [filterKey, setFilterKey] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 999]);
  const [searchInput, setSearchInput] = useState<string>("");
  const isRangeFilter = RangeKeys.includes(filterKey);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (filterKey.length) {
      const camelCaseFilterKey = convertToCamelCase(filterKey) as keyof FinData;
      if (isRangeFilter) {
        const _updatedData = mockData.filter(
          (val) =>
            Number(val[camelCaseFilterKey]) > rangeValue[0] &&
            Number(val[camelCaseFilterKey]) < rangeValue[1]
        );
        setFilteredData(_updatedData);
      } else {
        const _updatedData = mockData.filter((val) =>
          String(val[camelCaseFilterKey])
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        );
        setFilteredData(_updatedData);
      }
    }
  }, [filterKey, rangeValue, searchInput, isRangeFilter, setFilteredData]);

  return (
    <Flex
      gap="md"
      align="flex-start"
      direction={isSmallScreen ? "column" : "row"}
      ml={"10px"}
    >
      <Select
        placeholder="Filter Data by"
        data={OPTIONS}
        searchable
        searchValue={filterKey}
        onSearchChange={setFilterKey}
      />
      {isRangeFilter ? (
        <Box style={{ width: "10vw", marginTop: "-6px" }}>
          <Badge size="xs" variant="light" color="blue">
            in $ Millions
          </Badge>
          <RangeSlider
            min={0}
            max={999}
            value={rangeValue}
            onChange={setRangeValue}
            size="sm"
          />
        </Box>
      ) : (
        <TextInput
          placeholder={`Enter ${filterKey}`}
          value={searchInput}
          onChange={(event) => setSearchInput(event.currentTarget.value)}
        />
      )}
    </Flex>
  );
}

export default Filter;
