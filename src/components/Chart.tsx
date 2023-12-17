import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FinData } from "../types";
Chart.register(...registerables);

interface FinancialChartProps {
  data: FinData[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.companyName),
    datasets: [
      {
        label: "Raised Capital in $ Millions",
        data: data.map((item) => parseFloat(String(item.raisedCapital))),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default FinancialChart;
