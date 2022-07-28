import NavbarLogo from '../assets/nav_logo.png'
import TrashUserImg from '../assets/nav_icon_bin.png'
import LogoutImg from '../assets/nav_icon_logout.png'
import axios from "axios";
import { AuthContext } from '../context/auth.context'
import { useContext } from "react";

import { useNavigate } from "react-router-dom";



function NavbarUser() {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogoutClick = () => {
        logoutUser();
        navigate('/');
    }

    const handleDeleteClick = () => {
        const userID = user._id
        //http://localhost:5005/api/auth/delete/${userID}
        axios.delete(`/api/auth/delete/${userID}`)
            .then((response) => {
                navigate('/');
                console.log(response)
            })

            .catch((error) => {
                console.log(error)
            })
    };


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
                            <div class="flex flex-row ">
                                <div class="py-4 px-2">
                                    <button onClick={handleLogoutClick}><img src={LogoutImg} alt="Logo" class="h-6 w-6" /></button>
                                </div>
                                <div class="py-4 px-2">
                                    <button onClick={handleDeleteClick}><img src={TrashUserImg} alt="Logo" class="h-6 w-6" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarUser;