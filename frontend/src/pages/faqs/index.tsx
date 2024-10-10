import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Faqs() {
  return (
    <Wrapper title="About">
      <div className="text-end">
        <h2 className="text-black font-bold text-2xl py-2">FAQS</h2>
      </div>
      <div className="bg-white w-full px-7 py-7 my-2">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold text-[#3C3C3C]">
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </h1>
        </div>
      </div>
      <div className="bg-white w-full px-7 py-7 my-[2rem] rounded-lg text-primary border-t-4 border-primary">
        <ul className="text-blue-500 list-disc">
          <li className="py-2">
            <Link href="" className="">
              Bagaimana saya bisa menambah usulan penelitian?
            </Link>
          </li>
          <li className="py-2">
            <Link href="" className="">
              Bagaimana saya bisa menambah usulan penelitian?
            </Link>
          </li>
          <li className="py-2">
            <Link href="" className="">
              Bagaimana saya bisa menambah usulan penelitian?
            </Link>
          </li>
          <li className="py-2">
            <Link href="" className="">
              Bagaimana saya bisa menambah usulan penelitian?
            </Link>
          </li>
          <li className="py-2">
            <Link href="" className="">
              Bagaimana saya bisa menambah usulan penelitian?
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-white w-full px-7 py-7 my-[2rem] rounded-lg text-primary border-t-4 border-primary">
        <h2 className="text-xl font-semibold">Hubungi Kami</h2>
        <h2 className="text-base font-semibold">
          Butuh bantuan? Sampaikan pertanyaan dan keluhan anda kepada kami
        </h2>

        <form className="flex items-center gap-4 my-7 w-full">
          <input
            type="text"
            className="input w-[50%] bg-[#CDCDCD] text-black font-semibold"
            placeholder="Email"
          />
          <input
            type="text"
            className="input w-[50%] bg-[#CDCDCD] text-black font-semibold"
            placeholder="Subject"
          />
        </form>
        <textarea
          placeholder="Message"
          className="textarea input w-full min-h-[15rem] bg-[#CDCDCD] text-black font-semibold mb-5"
        ></textarea>
        <div className="flex justify-end">
          <button className="btn bg-[#1C532A] text-white hover:bg-[#207435]">
            Submit
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
