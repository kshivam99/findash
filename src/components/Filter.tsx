import { Container, RangeSlider, Select, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import mockData from "../data/mockData";
import { FinData } from "../types";
import { convertToCamelCase } from "../utils";

const OPTIONS = [
  "Company Name",
  "Address",
  "Registration Date",
  "Number Of Employees",
  "Raised Capital in Millions $",
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
  "Raised Capital in Millions $",
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
  const [filterKey, setFilterKey] = useState<string>("Company Name");
  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 100]);
  const [searchInput, setSearchInput] = useState<string>("");
  const isRangeFilter = RangeKeys.includes(filterKey);

  useEffect(() => {
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
  }, [filterKey, rangeValue, searchInput]);

  return (
    <Container>
      <Select
        label="Filter Data by"
        placeholder="Select"
        data={OPTIONS}
        defaultValue="Company Name"
        searchable
        searchValue={filterKey}
        onSearchChange={setFilterKey}
      />
      {isRangeFilter ? (
        <RangeSlider
          min={0}
          max={10000}
          value={rangeValue}
          onChange={setRangeValue}
        />
      ) : (
        <TextInput
          placeholder={`Enter ${filterKey}`}
          value={searchInput}
          onChange={(event) => setSearchInput(event.currentTarget.value)}
        />
      )}
    </Container>
  );
}

export default Filter;
