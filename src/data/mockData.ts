import { FinData } from "../types";
const faker = require('faker');

const generateMockData = (count: number): FinData[] => {
  const mockData = [];

  for (let i = 0; i < count; i++) {
    mockData.push({
      id: i + 1,
      companyName: faker.company.companyName(),
      address: faker.address.streetAddress(),
      registrationDate: faker.date.past(),
      numberOfEmployees: faker.datatype.number(),
      raisedCapital: faker.finance.amount(),
      turnover: faker.finance.amount(),
      netProfit: faker.finance.amount(),
      contactNumber: faker.phone.phoneNumber(),
      contactEmail: faker.internet.email(),
      companyWebsite: faker.internet.url(),
      loanAmount: faker.finance.amount(),
      loanInterest: faker.datatype.number({ min: 1, max: 10 }),
      accountStatus: faker.random.arrayElement(['Active', 'Closed']),
    });
  }

  return mockData;
}

const mockData = generateMockData(30); // Change the count as needed

export default mockData;
