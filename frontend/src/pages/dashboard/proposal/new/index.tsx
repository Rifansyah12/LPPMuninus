import WrapperDashboard from "@/components/WrapperDashboard";

export default function NewProposal() {
  return (
    <WrapperDashboard title="Usulan Baru">
      <div className="w-full p-7 text-center text-primary mt-7 bg-white">
        <h2 className="text-2xl font-bold mb-5">Identitas Pengusulan</h2>
        <form action="" className="">
          <div className="flex items-center gap-4">
            <label htmlFor="label">Jenis Penelitian</label>
            <select className="select w-full max-w-xs select-sm bg-white text-primary">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <p className="text-left my-[2rem] text-lg font-bold">
            Identitas Pengusul
          </p>
          <div className="flex flex-col lg:flex-row gap-7 items-center">
            <div className="lg:w-[50%] w-full flex flex-col gap-4">
              <InputForm label="Nama Lengkap" type="text" name="fullname" />
              <InputForm label="Id Sinta" type="text" name="id_sinta" />
            </div>
            <div className="lg:w-[50%] w-full flex flex-col gap-4 ">
              <InputForm label="NIDN" type="text" name="nidn" />
              <InputForm label="No. Handphone" type="text" name="phone" />
            </div>
          </div>

          <p className="text-left my-[2rem] text-lg font-bold">
            Identitas Usulan
          </p>

          <div className="flex flex-col lg:flex-row gap-7">
            <div className="lg:w-[50%] w-full flex flex-col gap-4">
              <InputForm label="Judul" type="text" name="title" />
              <InputForm label="Rumpun Ilmu" type="text" name="rumpun_ilmu" />
              <InputForm label="Tahun Usulan" type="number" name="year" />
              <InputForm label="Skema" type="text" name="scema" />
              <InputForm label="Tema" type="text" name="theme" />
              <div className="flex justify-between items-center gap-4">
                <InputForm
                  label="Lama Kegiatan"
                  type="date"
                  name="duration_from"
                />
                <p>To</p>
                <input
                  type="date"
                  className="input max-w-xs input-sm bg-[#D9D9D9] text-primary"
                  name="duration_to"
                />
              </div>
            </div>
            <div className="lg:w-[50%] w-full flex flex-col gap-4 ">
              <InputForm label="Nama Anggota 1" type="text" name="member_1" />
              <InputForm label="ID Sinta" type="text" name="id_sinta_1" />
              <InputForm label="NIDN" type="text" name="nidn_1" />
              <InputForm label="Nama Anggota 2" type="text" name="member_2" />
              <InputForm label="ID Sinta" type="text" name="id_sinta_2" />
              <InputForm label="NIDN" type="text" name="nidn_2" />
            </div>
          </div>
          <button className="btn bg-[#1C532A] lg:w-[50%] w-[70%] my-[2rem] text-white">
            Simpan
          </button>
        </form>
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
