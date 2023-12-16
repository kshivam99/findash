import { Container, RangeSlider, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { FinData } from "../types";

const OPTIONS = [
  "Company Name",
  "Address",
  "Registration Date",
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
  const [filterKey, setFilterKey] = useState<string>("Company Name");
  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 1000]);
  const [searchInput, setSearchInput] = useState<string>("");
  const isRangeFilter = RangeKeys.includes(filterKey);

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
        <RangeSlider min={0} max={10000000} value={rangeValue} onChange={setRangeValue} />
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
