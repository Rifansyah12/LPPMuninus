import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function About() {
  return (
    <Wrapper title="About">
      <div className="text-end">
        <Link href="/faqs">
          <h2 className="text-blue-300">FAQS</h2>
        </Link>
        <h2 className="text-black font-bold text-2xl py-2">About</h2>
      </div>
      <div className="bg-white w-full px-7 py-7 my-2">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold text-[#3C3C3C]">TENTANG SIMPPM UNINUS</h1>
        </div>
      </div>
      <div className="bg-white w-full px-7 py-7 my-[2rem] rounded-lg text-primary border-t-4 border-primary">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          aliquam nunc. Fusce ornare, dolor tempor gravida interdum, quam lacus
          placerat leo, vitae varius velit diam ac neque. Aliquam ut pulvinar
          tortor, nec interdum tellus. Curabitur at eros eu sem bibendum
          sodales. Ut nec lectus in mi tincidunt mattis. Morbi dapibus justo
          quis tempus gravida. Ut odio massa, consectetur non nulla ac, congue
          aliquet odio. Mauris luctus scelerisque sapien, at maximus risus
          egestas tristique. Fusce aliquet, felis et sagittis tristique, neque
          sapien condimentum elit, in consectetur elit erat vel felis. Morbi
          scelerisque iaculis erat non pellentesque. Curabitur tincidunt est non
          massa vehicula, eget convallis nisl bibendum. Vestibulum scelerisque
          arcu ipsum.
        </p>
      </div>
      <div className="bg-white w-full px-7 py-7 my-[2rem] rounded-lg text-primary border-t-4 border-primary">
        <h2 className="text-lg font-semibold">
          SISTEM INFORMASI MANAJEMEN, PENELITIAN DAN PENGABDIAN KEPADA
          MASYARAKAT
        </h2>
        <h2 className="text-lg font-semibold">UNIVERSITAS ISLAM NUSANTARA</h2>

        <div className="flex items-center gap-4 my-7">
          <span className="material-symbols-outlined text-primary text-[2rem]">
            location_on
          </span>
          <p>
            Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung
          </p>
        </div>
        <div className="flex items-center gap-4 my-7">
          <span className="material-symbols-outlined text-primary text-[2rem]">
            phone_in_talk
          </span>
          <p>+0123-4567-8910</p>
        </div>
        <div className="flex items-center gap-4 my-7">
          <span className="material-symbols-outlined text-primary text-[2rem]">
            mail
          </span>
          <p>E.MAILKAMI@MAIL.COM</p>
        </div>
      </div>
    </Wrapper>
  );
}
