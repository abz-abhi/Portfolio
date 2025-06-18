const HomeContent = () => {
  return (
    <div class="flex ml-80 mt-36 relative w-fit ">
      <div class=" round w-[385px] h-[431px]  bg-gradient-radial from-[#5D1C99] via-[#1E003E] to-black overflow-hidden">
        <img
          class="relative  animate-glow shadow-[0_0_22px_rgba(0,255,204,0.8)] border-transparent"
          src="/assets/images/profileImg.png"
          alt=""
        />
      </div>
      <img
        class="absolute ml-72 mt-5"
        src="/assets/vectors/Vector.png"
        alt=""
      />
      <div class="italic ">
        <p class="text-lg">
          Hello! I Am <span class="text-textPurple">Abhishek</span>{" "}
        </p>
        <div class="ml-16 mt-24">
          <p> A Programmer who</p>
          <p class="text-6xl">Judges a book</p>
          <img
            class="absolute ml-40"
            src="/assets/vectors/Ellipse 5.png"
            alt=""
          />
          <p class="text-6xl">
            by its <span class="text-textPurple">cover</span>...
          </p>
          <p class="text-[10px] mt-2">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
