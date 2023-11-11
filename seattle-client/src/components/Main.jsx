import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import SearchResults from './SearchResults'

import RestaurantList from "./RestaurantList";
import RestaurantPage from "./RestaurantPage";
import ActivityList from "./ActivityList";
import ActivityPage from "./ActivityPage";
import HotelList from "./HotelList";
import HotelPage from "./HotelPage";
import DistrictList from "./DistrictList";
import Quiz from "./Quiz"

import Admin from "./Admin";
import ActivityAdd from "./ActivityAdd";
import ActivityDelete from "./ActivityDelete";
import ActivityUpdate from "./ActivityUpdate";

export default function Main() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/SearchResults' element={< SearchResults />} /> */}
        <Route path="/RestaurantList" element={<RestaurantList />} />
        <Route path="/RestaurantList/:id" element={<RestaurantPage />} />
        <Route path="/ActivityList" element={<ActivityList />} />
        <Route path="/ActivityList/:id" element={<ActivityPage />} />
        <Route path="/HotelList" element={<HotelList />} />
        <Route path="/HotelList/:id" element={<HotelPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addactivity" element={<ActivityAdd />} />
        <Route path="/deleteactivity/:id" element={<ActivityDelete />} />
        <Route path="/activity/:id" element={<ActivityUpdate />} />
        <Route path="/DistrictList" element={<DistrictList />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
