import WorkExperience from "../components/work-experience.jsx";
import Softwares from "../components/softwares.jsx";
import VectorsLine from "../components/vectors-lines.jsx";
import SoftwareDesign from "../components/software-design.jsx";

const SecondPage = () => {
  return (
    <div className="flex justify-center md:p-0 xxs:p-5">
      <div class="flex flex-col  items-center justify-center w-fit">
        <WorkExperience />
        <div class="italic flex flex-col items-center md:mt-44 xxs:mt-24 ">
          <p class="md:text-2xl xxs:text-[16px] text-center">
            I'm currently looking to join a
            <span class="text-textPurple"> cross-functional</span> team
          </p>
          <p className="md:text-xs xxs:text-[10px]">that values improving people's lives through accessible design </p>

          <div class="flex flex-col items-center mt-10 gap-4">
            <div class="flex gap-3">
              <Softwares imgUrl="../assets/logos/Rectangle 13.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 12.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 2.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 4.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 6.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 7.png" />
              <Softwares imgUrl="../assets/logos/Rectangle 1.png" />
            </div>
            <div class="flex gap-3">
              <Softwares imgUrl="../assets/logos/Rectangle 3.png" />
              <Softwares imgUrl="../assets/logos/PHP-logo.svg" />
              <Softwares imgUrl="../assets/logos/Laravel-Logo.wine.png" />
              <Softwares imgUrl="../assets/logos/96018_xampp_icon.png" />
              <Softwares imgUrl="../assets/logos/logo-mysql-170x115.png" />
              <Softwares imgUrl="../assets/logos/Git-Logo-2Color.png" />
            </div>
            <VectorsLine />
            <SoftwareDesign />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
