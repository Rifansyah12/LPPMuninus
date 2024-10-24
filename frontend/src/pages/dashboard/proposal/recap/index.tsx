import WrapperDashboard from "@/components/WrapperDashboard";

export default function RecapProposal() {
  return (
    <WrapperDashboard title="Usulan Baru" menu="usulan-recap">
      <div className="w-full p-7 text-center text-primary mt-7 bg-white">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="text-gray-700 text-center">
              <tr className="">
                <th rowSpan={2} className="">
                  No
                </th>
                <th rowSpan={2}>Fakultas</th>
                <th colSpan={3}>
                  Jumlah Usulan
                </th>
              </tr>
              <tr>
                <th>Proposal Masuk</th>
                <th>Proposal Didanai</th>
                <th>Jumlah Usulan</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </WrapperDashboard>
  );
}

const InputForm = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="input max-w-xs input-sm bg-[#D9D9D9] text-primary"
      />
    </div>
  );
};
