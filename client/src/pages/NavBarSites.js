import NavbarLogo from '../assets/nav_logo.png'
import UserHomeImg from '../assets/nav_icon_userhome.png'

import { NavLink } from "react-router-dom";


function NavbarSites() {
    return (
        <div>
            <nav class="bg-teal-700 shadow-lg">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex-direction: row">
                        <div class="flex space-x-1 justify-between">
                            <div class="flex items-center py-4 px-2">
                                <img src={NavbarLogo} alt="Logo" class="h-8 w-8 mr-2" />
                                <span class="text-sm md:text-base Neue text-white"
                                >Soil Tracker</span>
                            </div>
                            <div>
                                <div class="py-4 px-2">
                                    <NavLink to="/user/home" className={({ isActive }) => isActive ? "selected" : ""}>
                                        <img src={UserHomeImg} alt="Logo" class="h-6 w-6" /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarSites;