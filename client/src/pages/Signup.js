import NavbarLetHome from './NavBarLetHome';
import SignupArrBtn from '../assets/btn_signup.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react'



function SignUp(props) {

    //new sets of keys and values for new user
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();



    // this get's us the value from the input field
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUserName = (e) => setUserName(e.target.value);

    //Handle submit event
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { username, password };

        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        axios.post(`http://localhost:5005/api/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };



    return (
        <div>
            <NavbarLetHome />
            <div >
                <h1 class="pt-6 flex justify-center tracking-wide text-xl pb-3 md:text-3xl md:pb-12 md:pt-18">Set up your account:</h1>
                <form onSubmit={handleSignupSubmit} class="md:grid justify-items-center">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Enter Username</label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                value={username}
                                name="username"
                                onChange={handleUserName}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Enter Password</label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder="******"
                                type="password"
                                value={password}
                                name="password"
                                onChange={handlePassword}
                            />
                        </div>
                    </div>
                    <div class="pb-6 flex justify-center">
                        <button type="submit"><img class="object-scale-down h-16 md:h-24" src={SignupArrBtn} alt="signupbtn" /></button>
                    </div>
                </form>
                <div class="bg-teal-500/50 flex justify-center tracking-wide text-white text-m md:text-2xl">
                    {errorMessage && <p class="" className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default SignUp;