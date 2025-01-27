
import './App.css';

import Header from './header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavBar from './Header/MainNavBar';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import ExplorePakistan from './ExplorePakistan/ExplorePakistan';
import PropertyCarousel from './PropertyCarousel/PropertyCarousel';


function App() {
  return (
    <div>
  <MainNavBar/>
  <SecondSection/>
  <ThirdSection/>
  <ExplorePakistan/>

    </div>
  );
}

export default App;
