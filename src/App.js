import './App.css';
import ContactPage from './Components/ContactPage/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Land from './Components/Land/Land';
import SignUp from './Components/SignUp/SignUp';
import Listing from './Components/Listing/Listing';
import SubmitListing from './Components/SubmitListing/SubmitListing';
import UnList from './Components/UnListForm/UnList';
import ListingFeatures from './Components/Listing/ListingFeatures';
import Payment from './Components/Payment/Payment';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Land />} exact />
        <Route path='/contact' element={<ContactPage />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='/listing' element={<Listing />} exact />
        <Route path='/listingform' element={<SubmitListing />} exact />
        <Route path='/unlistProperty' element={<UnList />} exact />
        <Route path='/listingfeatures' element={<ListingFeatures />} exact />
        <Route path='/payment' element={<Payment />} exact />
      </Routes>
    </Router>
  );
}

export default App;
