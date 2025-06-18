import Header from "../components/header.jsx";
import HomeContent from "../components/home-content.jsx";
import CurrentlyWork from "../components/work-on.jsx";

const Mainpage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HomeContent />
      <CurrentlyWork />
    </div>
  );
};

export default Mainpage;
