const HomeContent = () => {
  return (
    <div
      class="flex relative w-fit
     md:ml-80 md:mt-36 md:p-0
     sm:ml-0 sm:mt-20 sm:p-5
     xxs:ml-0 xxs:mt-20 xxs:p-5 "
    >
      <div
        class=" round bg-gradient-radial from-[#5D1C99] via-[#1E003E] to-black overflow-hidden
      md:w-[385px] md:h-[431px]
      xxs:w-[250px] xxs:h-[250px]
      "
      >
        <img
          class="relative animate-glow shadow-[0_0_22px_rgba(0,255,204,0.8)] border-transparent"
          src="/assets/images/profileImg.png"
          alt=""
        />
      </div>
      <img
        class="absolute 
        md:w-auto md:ml-72 md:mt-5 
        xxs:w-10 xxs:ml-32 xxs:mt-5 "
        src="/assets/vectors/Vector.png"
        alt=""
      />
      <div class="italic ">
        <p
          class="md:text-lg md:mt-0 md:ml-0
                 sm:text-sm sm:mt-0 sm:ml-0
                 xxs:text-xs xxs:mt-0 xxs:ml-0"
        >
          Hello! I Am <span class="text-textPurple">Abhishek</span>
        </p>
        <div class="relative md:ml-16 md:mt-24 sm:ml-10 sm:mt-20 xxs:ml-5 xxs:mt-16 ">
          <p class="md:text-xl sm:text-lg xxs:text-sm"> A Programmer who</p>
          <p className="md:text-6xl sm:text-4xl xxs:text-2xl">
            Judges a book <br />
            by its <span class="text-textPurple">cover</span>...
          </p>
          <img
            class="absolute 
            md:ml-40 md:-mt-14 md:h-fit 
            sm:ml-[5.5rem] sm:-mt-10 sm:h-10
            xxs:ml-[3.6rem] xxs:-mt-7 xxs:h-6
            "
            src="/assets/vectors/Ellipse 5.png"
            alt=""
          />

          <p class="text-[10px] mt-2">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
