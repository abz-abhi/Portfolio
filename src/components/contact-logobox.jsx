const ContactLogo = ({ linkUrl, imgPath }) => {
  return (
    <a class="h-8 w-8" href={linkUrl}>
      <img class="" src={imgPath} alt="" />
    </a>
  );
};

export default ContactLogo;
