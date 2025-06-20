import { div } from "motion/react-client";

const HomeContent = () => {
  return (
    <div className=" flex justify-center items-center">
      <div
        class="flex relative w-fit 
     lg:-ml-80 lg:mt-[16rem] lg:p-0
     md:ml-0 md:mt-[13rem] md:p-4
     sm:ml-0 sm:mt-[11rem] sm:p-5
     xxs:ml-0 xxs:mt-[11rem] xxs:p-5  "
      >
        <div
          class=" round bg-gradient-radial from-[#5D1C99] via-[#1E003E] to-black overflow-hidden
      lg:w-[385px] lg:h-[431px]
      md:w-[300px] md:h-[300px]
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
        lg:w-auto lg:ml-72 lg:mt-5 
        md:w-16 md:ml-52 md:mt-4
        xs:w-12  xs:ml-40 xs:mt-2
        xxs:w-10 xxs:ml-32 xxs:mt-5 "
          src="/assets/vectors/Vector.png"
          alt=""
        />
        <div class="italic ">
          <p class="md:text-lg md:mt-0 md:ml-0 sm:text-sm sm:mt-0 sm:ml-0 xxs:text-xs xxs:mt-0 xxs:ml-0">
            Hello! I Am <span class="text-textPurple">Abhishek</span>
          </p>
          <div class="relative lg:ml-16 lg:mt-24 md:mt-14 sm:ml-10 sm:mt-20 xxs:ml-5 xxs:mt-16 ">
            <p class="md:text-xl sm:text-lg xxs:text-sm"> A Programmer who</p>
            <p className="lg:text-6xl md:text-5xl sm:text-4xl xxs:text-2xl">
              Judges a book <br />
              by its <span class="text-textPurple">cover</span>...
            </p>
            <img
              class="absolute 
            lg:ml-40 lg:-mt-14 lg:h-fit 
            md:ml-[7.3rem] md:-mt-[2.7rem] md:h-12
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
    </div>
  );
};

export default HomeContent;
