import ContactLogo from "../components/contact-logobox";

const Contact = () => {
  const phoneNumber = "8606077265";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied!");
    } catch (error) {
      console.error("copy faild", error);
    }
  };

  return (
    <div class="flex justify-center mb-20  md:p-10 xxs:p-4 ">
      <div class="flex flex-col flex-wrap w-fit italic space-y-7
                  lg:mt-96 lg:mr-[30rem]
                  md:mt-44 md:mr-[8rem] 
                  xxs:mt-16 xxs:mr-0">
        <p class="text-2xl lg:mb-20 md:mb-10">Contact</p>
        <p class="max-w-[700px]">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <p>abhislinux@gmail.com</p>
        <div class="flex gap-2 ">
          <ContactLogo
            linkUrl="https://www.instagram.com/4bhi_shek_a?igsh=eGRmeDM2NTZueGZz"
            imgPath="../assets/logos/contact/icons8-instagram-48.png"
          />
          <ContactLogo
            linkUrl="https://x.com/AbzAbhishe65817?t=nypS8YS70mmBpyRBfzpFQg&s=09"
            imgPath="../assets/logos/contact/icons8-x-48.png"
          />
          <ContactLogo
            linkUrl="https://wa.me/message/SZQCP3BLW6EJI1"
            imgPath="../assets/logos/contact/icons8-whatsapp-48.png"
          />
          <ContactLogo
            linkUrl="https://www.linkedin.com/in/abhishek-a-2895ba335/"
            imgPath="../assets/logos/contact/icons8-linkedin-48.png"
          />
          <ContactLogo
            linkUrl="mailto:abhislinux@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20portfolio"
            imgPath="../assets/logos/contact/icons8-email-48.png"
          />
          <button class="h-8 w-8" onClick={handleCopy}>
            <img src="../assets/logos/contact/icons8-phone-48.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
