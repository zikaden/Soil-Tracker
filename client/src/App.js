import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login'
import Signup from './pages/Signup';
import About from './pages/About'
import UserHome from './pages/UserHome';
import NewSite from './pages/NewSite';
import RecentSites from './pages/RecentSites';
import SearchSites from './pages/SearchSites'
import ProtectedRoute from './components/ProtectedRoute';
import SiteInfo from './pages/SiteInfo'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute redirectTo={'/'} />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/site/new" element={<NewSite />} />
          <Route path="/user/site/recent" element={<RecentSites />} />
          <Route path="/user/sites/search" element={<SearchSites />} />
          <Route path="/user/site/info/:siteID" element={<SiteInfo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
