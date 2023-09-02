import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import WelcomeAL from "./home/welcome/WelcomeAL";
import FlightDetails from "./home/flight/FlightDetails";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import FlightDetailsCard from "./common/cards/flight/FlightDetailsCard";
import AirlineDetails from "./home/flight/AirlineDetails"
import AirlineDetailsCard from "./common/cards/flight/AirlineDetailsCard";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  FlightDetails,
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  FlightDetailsCard,
  WelcomeAL,
  AirlineDetails,
  AirlineDetailsCard
};
