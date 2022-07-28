import NavbarUser from './NavBarUser';

import NewSiteImg from '../assets/user_new_sites.png'
import RecentSitesImg from '../assets/user_latest_sites.png'
import SearchSitesImg from '../assets/user_search_sites.png'

import { NavLink } from "react-router-dom";


function UserHome() {

    return (
        <div>
            <NavbarUser />
            <div class="flex flex-col space-y-7 mx-20 pt-7 pb-7 md:flex-row md:flex items-end md:p-10 md:space-x-20">
                <NavLink to="/user/site/new" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={NewSiteImg} alt="newsite" /></NavLink>
                <NavLink to="/user/site/recent/" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={RecentSitesImg} alt="recentsites" /></NavLink>
                <NavLink class="md:p-4" to="/user/sites/search" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={SearchSitesImg} alt="searchsites" /></NavLink>
            </div>
        </div>
    );
}

export default UserHome;