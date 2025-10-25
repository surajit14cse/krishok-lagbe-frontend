import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import WorkerCardsSection from './components/WorkerCardsSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import WorkerProfilePage from './components/WorkerProfilePage';
import AdminDashboard from './components/AdminDashboard';
import BookingPage from './components/BookingPage';
import Banner from './components/Banner';
import CategoryPage from './components/CategoryPage';
import SearchResultsPage from './components/SearchResultsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import './App.css';



export const allWorkers = [
  { id: 1, name: 'Dinesh Sarker', occupation: 'Mason', location: 'Dhaka', district: 'Dhaka', upazila: 'Savar', rating: 4.5, image: '/FarmerImage/f1.png' },
  { id: 2, name: 'Jane Smith', occupation: 'Helper', location: 'Chittagong', district: 'Chittagong', upazila: 'Hathazari', rating: 4.8, image: '/FarmerImage/f2.png' },
  { id: 3, name: 'Peter Jones', occupation: 'Farmer', location: 'Rajshahi', district: 'Rajshahi', upazila: 'Rajshahi Sadar', rating: 4.2, image: '/FarmerImage/f3.png' },
  { id: 4, name: 'Jane Smith', occupation: 'Helper', location: 'Chittagong', district: 'Chittagong', upazila: 'Fatikchhari', rating: 4.1, image: '/FarmerImage/f4.png' },
  { id: 5, name: 'Jane Smith', occupation: 'Helper', location: 'Chittagong', district: 'Chittagong', upazila: 'Raozan', rating: 4.6, image: '/FarmerImage/f5.png' },
  { id: 6, name: 'Rahim Ali', occupation: 'Planting', location: 'Sylhet', district: 'Sylhet', upazila: 'Sylhet Sadar', rating: 4.7, image: '/FarmerImage/f1.png' },
  { id: 7, name: 'Karim Uddin', occupation: 'Planting', location: 'Khulna', district: 'Khulna', upazila: 'Dumuria', rating: 4.9, image: '/FarmerImage/f2.png' },
  { id: 8, name: 'Fatima Begum', occupation: 'Planting', location: 'Gazipur', district: 'Gazipur', upazila: 'Sreepur', rating: 4.8, image: '/FarmerImage/f3.png' },
];

function Home() {
  const [filteredWorkers, setFilteredWorkers] = useState(allWorkers);
  const location = useLocation();

  useEffect(() => {
    setFilteredWorkers(allWorkers);
  }, [location]);

  const handleFilter = ({ district, upazila, rating }) => {
    let workers = allWorkers;

    if (district !== 'All Districts') {
      workers = workers.filter(worker => worker.district === district);
    }

    if (upazila !== 'All Upazilas') {
      workers = workers.filter(worker => worker.upazila === upazila);
    }

    if (rating !== 'Any Rating') {
      const minRating = parseFloat(rating.split(' ')[0]);
      workers = workers.filter(worker => worker.rating >= minRating);
    }

    setFilteredWorkers(workers);
  };

  return (
    <>
      <Banner />
      <Hero />
      <FilterSection onFilter={handleFilter} />
      <WorkerCardsSection workers={filteredWorkers} />
      <TestimonialSection />
    </>
  );
}



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/worker/:id" element={<WorkerProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
