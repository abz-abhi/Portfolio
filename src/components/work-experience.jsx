import ExperienceBox from "./experience-box";

const WorkExperience = () => {
  return (
    <div class=" md:mt-48 xxs:mt-16 relative w-fit">
      <p class=" md:text-4xl xxs:text-2xl italic xxs:ml-3">Work Experience</p>
      <div class="flex flex-wrap  gap-5 md:mt-10 xxs:mt-8 justify-center">
        <div class=" flex flex-col gap-5  z-10">
          <ExperienceBox
            image="../assets/vectors/Group 1.png"
            title="CIB on the Mobile"
            description="Take your client onboard seamlessly by our amazing
                       tool of digital onboard process."
          />
          <ExperienceBox
            image="../assets/vectors/Group 1938.png"
            title="CIB on the Mobile"
            description="Take your client onboard seamlessly by our amazing
                       tool of digital onboard process."
          />
        </div>
      <div class="md:w-[500px] md:h-[500px] xxs:w-[400px] xxs:h-[400px] absolute md:-mt-40 xxs:mt-36 z-0 opacity-50  rounded-full bg-gradient-radial from-[#763CAC] via-[#1e003e] to-black overflow-hidden "></div>
        <div class=" flex flex-col gap-5 z-10 ">
          <ExperienceBox
            image="../assets/vectors/Group 1935.png"
            title="CIB on the Mobile"
            description="Take your client onboard seamlessly by our amazing
                       tool of digital onboard process."
          />
          <ExperienceBox
            image="../assets/vectors/Icons.png"
            title="CIB on the Mobile"
            description="Take your client onboard seamlessly by our amazing
                       tool of digital onboard process."
          />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
