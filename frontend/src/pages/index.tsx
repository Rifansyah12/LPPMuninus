import Navbar from "@/components/Navbar";
import { faGraduationCap, faInbox, faSquareCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
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
        <div className="flex justify-center">
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            style={{ backgroundColor: "white" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          <PieChart
            width={730}
            height={250}
            style={{ backgroundColor: "white" }}
          >
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
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