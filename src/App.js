import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ShowsPage from './pages/booking/bookingPage/ShowsPage';
import EventWrapper from './pages/events/EventWrapper';
import ShowDetail from "./pages/booking/bookingPage/ShowDetail";


// import EventDetailPage from './pages/events/eventdetail/EventDetailPage';
// import EventListPage from './pages/events/eventlist/EventListPage';
// import EventList from './pages/eventList';
// import FilterComponent from './pages/filterComponent';



export default function App() {
 
  return (
  <>
  <Router>
  <Routes>
    
  {/* <h1>App</h1> */}
  {/* <Main /> */}
  {/* <EventList /> */}
  {/* <EventListPage/> */}
  {/* <EventDetailPage /> */}

  <Route exact path="/" element={<EventWrapper />}/>
  <Route path = "/booking/event" element={<ShowsPage/>}/>
  <Route path="/booking/event/:id" element={<ShowDetail />}/> 
  </Routes>
  </Router> 
  
  {/* <ShowsPage/> */}
 
 </>
  );
}






