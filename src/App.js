
import './App.css';

import Header from './header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavBar from './Header/MainNavBar';

import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import ExplorePakistan from './ExplorePakistan/ExplorePakistan';
import PropertyCarousel from './PropertyCarousel/PropertyCarousel';
import TravelMore from './TravelMore/TravelMore';
import VillaSection from './VillaSection/VillaSection';
import Inspiration from './Inspiration/Inspiration';
import UniqueProperties from './UniqueProperties/UniqueProperties';
import WeekendDeals from './WeekendDeals/WeekendDeals';
import FirstFooter from './Footer1/Footer1';
import DatePicker from './DateChelender/DateChelender';


function App() {
  return (
    <div>
  <MainNavBar/>
<DatePicker/>
  <SecondSection/>
  <WeekendDeals/>
  <UniqueProperties/>
  <Inspiration/>
  <ThirdSection/>
  <ExplorePakistan/>
<TravelMore/>
<VillaSection/>
<FirstFooter/>

    </div>
  );
}

export default App;
