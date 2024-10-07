import Wrapper from "@/components/Wrapper";

export default function About() {
  return (
    <Wrapper title="About">
      <div className="bg-white w-full px-7 py-7 my-2">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold text-[#3C3C3C]">TENTANG SIMPPM</h1>
        </div>
      </div>
      <div className="bg-white w-full px-7 py-7 my-2 text-primary">
        <p className="text-lg font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        aliquam nunc. Fusce ornare, dolor tempor gravida interdum, quam lacus
        placerat leo, vitae varius velit diam ac neque. Aliquam ut pulvinar
        tortor, nec interdum tellus. Curabitur at eros eu sem bibendum sodales.
        Ut nec lectus in mi tincidunt mattis. Morbi dapibus justo quis tempus
        gravida. Ut odio massa, consectetur non nulla ac, congue aliquet odio.
        Mauris luctus scelerisque sapien, at maximus risus egestas tristique.
        Fusce aliquet, felis et sagittis tristique, neque sapien condimentum
        elit, in consectetur elit erat vel felis. Morbi scelerisque iaculis erat
        non pellentesque. Curabitur tincidunt est non massa vehicula, eget
        convallis nisl bibendum. Vestibulum scelerisque arcu ipsum.
        </p>
      </div>
    </Wrapper>
  );
}
