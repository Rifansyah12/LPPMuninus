import Navbar from "@/components/Navbar";
import {
  faGraduationCap,
  faInbox,
  faSquareCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DataChart } from "@/utils/Data";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js"; // Import for runtime usage
import type { ChartData, ChartOptions } from "chart.js"; // Import type-only

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend, Title);

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#F4F6F9] w-full min-h-screen px-16 py-7">
        <div className="text-end">
          <a href="https://lppm.uninus.ac.id">
            <h2 className="text-blue-300">FAQS</h2>
          </a>
        </div>

        <div className="bg-white w-full px-7 py-7 my-2">
          <div className="flex items-center gap-1">
            <h1 className="text-3xl font-bold text-[#3C3C3C]">Statistik</h1>
          </div>
        </div>

        <h2 className="text-black text-lg py-4">Data 10 Tahun Terakhir</h2>
        <div className="flex justify-center items-center w-full gap-7 text-gray-700">
          <div className="bg-white shadow-md  flex items-center p-4 gap-3">
            <div className="flex items-center justify-center p-5 bg-[#1C532A] shadow-md">
              <FontAwesomeIcon icon={faInbox} className="text-white text-2xl" />
            </div>
            <div className="">
              <p>Proposal Masuk</p>
              <p>212312</p>
            </div>
          </div>

          <div className="bg-white shadow-md  flex items-center p-4 gap-3">
            <div className="flex items-center justify-center p-5 bg-yellow-400 shadow-md">
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-white text-2xl"
              />
            </div>
            <div className="">
              <p>Proposal didanai</p>
              <p>6342</p>
            </div>
          </div>

          <div className="bg-white shadow-md  flex items-center p-4 gap-3">
            <div className="flex items-center justify-center p-5 bg-blue-600 shadow-md">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-white text-2xl"
              />
            </div>
            <div className="">
              <p>Proposal Masuk</p>
              <p>212312</p>
            </div>
          </div>

          <div className="bg-white shadow-md  flex items-center p-4 gap-3">
            <div className="flex items-center justify-center p-5 bg-[#1C532A] shadow-md">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-white text-2xl"
              />
            </div>
            <div className="">
              <p>Proposal Masuk</p>
              <p>212312</p>
            </div>
          </div>
        </div>

        <h2 className="text-black text-lg py-4">Data 10 Tahun Terakhir</h2>
        <div className="flex justify-center gap-7">
          <div className="w-[25rem] p-2 bg-white shadow-md">
            <ChartData />
          </div>
          <div className="w-[25rem] p-2">
            <ChartData />
          </div>
        </div>

        <footer>
          <span className="h-[2px] block w-full bg-[#D9D9D9] mt-[9rem] mb-4"></span>
          <p className="text-md text-[#3C3C3C]">
            COPYRIGHT 2024 - LPPM UNIVERSITAS ISLAM NUSANTARA
          </p>
        </footer>
      </div>
    </div>
  );
}

const ChartData = () => {
  const [chartData, setChartData] = useState<ChartData<"pie">>({
    labels: DataChart.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: DataChart.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="">
      <PieChart chartData={chartData} />
    </div>
  );
};

// PieChart component receives ChartData and uses Chart.js for rendering
const PieChart = ({ chartData }: { chartData: ChartData<"pie"> }) => {
  return (
    <div className="">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={
          {
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
            },
          } as ChartOptions<"pie">
        }
      />
    </div>
  );
};
