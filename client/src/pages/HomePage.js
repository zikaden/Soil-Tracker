import SignupImg from "../assets/home_signup.png"
import LoginImg from "../assets/home_login.png"
import AboutImg from "../assets/home_about.png"
import NavbarHome from "./NavBarHome";
import { NavLink } from "react-router-dom";



function HomePage() {
    return (
        <div>
            <NavbarHome />
            <div class="flex flex-col space-y-7 mx-20 pt-7 pb-7 md:flex-row md:space-x-12 md:space-y-0 md:pt-10 md:pl-12 md:pr-12 ">
                <NavLink to="/signup" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={SignupImg} alt="signup" /></NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={LoginImg} alt="login" /></NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""}>
                    <img src={AboutImg} alt="about" /></NavLink>
            </div>
        </div>
    );
}

export default HomePage;