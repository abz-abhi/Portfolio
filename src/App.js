import './App.css';
import Mainpage from './pages/home-page';
import SecondPage from './pages/work-Experience'
import ThirdPage from './pages/example-projects';
import Contact from './pages/contact';

function App() {
  return (
    <div class="max-w-[2000px] text-white bg-[#11071F] flex flex-col ">
      <Mainpage />
      <SecondPage />
      <ThirdPage />
      <Contact />
    </div>
  );
}

export default App;
