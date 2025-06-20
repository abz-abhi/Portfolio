const CurrentlyWork = () => {
  return (
    <div
      class="italic w-fit 
    lg:ml-96 lg:mt-11 lg:p-0
    md ml-0 md:mt-10
    xs:ml-2 xs:mt-10
    xxs:ml-0 xxs:-mt-10 xxs:p-5"
    >
      <p class="md:text-5xl xxs:text-[28px] xs:text-[38px] whitespace-nowrap">
        I'm a Software Engineer. <span class="not-italic">|</span>
      </p>
      <p class="lg:text-2xl md:text-xl xxs:text-[12px] xs:text-[15px] flex items-center whitespace-nowrap md:mt-0 xxs:-mt-3 leading-tight">
        Currently, I'm a Software Engineer at
        <img
          class="h-12 w-12"
          src="/assets/logos/Adobe Express - file.png"
          alt=""
        />{" "}
        <a class="text-[#1877F2]" href="">
          Lexel-X
        </a>
      </p>
      <p class="lg:text-2xl md:text-xl md:mt-12 xxs:mt-6 xxs:text-[12px] xs:text-[15px]">
        A self-taught Software Engineer, functioning in the industry for 2+
        years now. <br />
        I make meaningful and delightful digital products that create an
        equilibrium <br />
        between user needs and business goals.
      </p>
    </div>
  );
};
export default CurrentlyWork;
