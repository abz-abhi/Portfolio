import ExperienceBox from "./experience-box";

const WorkExperience = () => {
  return (
    <div class=" mt-48 relative w-fit ">
      <p class=" text-4xl italic">Work Experience</p>
      <div class="flex flex-wrap  gap-5 mt-10 justify-center">
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
      <div class="w-[500px] h-[500px] absolute -mt-40 z-0 opacity-50  rounded-full bg-gradient-radial from-[#763CAC] via-[#1e003e] to-black overflow-hidden "></div>
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
