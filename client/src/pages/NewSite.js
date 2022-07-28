import NavbarSites from "./NavBarSites";
import infoImg from '../assets/site_new_general information.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react'
import { AuthContext } from '../context/auth.context'
import { useContext } from "react";


function NewSite() {
    const { user } = useContext(AuthContext);

    //new sets of keys and values for new site
    const [siteName, setSiteName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [profilNumber, setProfilNumber] = useState("");
    const [date, setDate] = useState(Date.now());
    const [operator, setOperator] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [elevation, setElevation] = useState("");
    const [pulpingprocess, setPulpingProcess] = useState("");
    const [keywords, setKeywords] = useState("");


    const navigate = useNavigate();

    // this get's us the value from the input field
    const handleSiteName = (e) => setSiteName(e.target.value);
    const handleProfilNumber = (e) => setProfilNumber(e.target.value);
    const handleProjectNumber = (e) => setProjectNumber(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleOperator = (e) => setOperator(e.target.value);
    const handleLatitude = (e) => setLatitude(e.target.value);
    const handleLongitude = (e) => setLongitude(e.target.value);
    const handleElevation = (e) => setElevation(e.target.value);
    const handlePulpingProcess = (e) => setPulpingProcess(e.target.value);
    const handleKeywords = (e) => setKeywords(e.target.value);


    //Handle submit event
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { siteName, projectNumber, profilNumber, date, operator, geolocation: { latitude, longitude }, elevation, pulpingprocess, keywords, user: user._id };

        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        //http://localhost:5005/api/sites/new
        axios.post(`/api/sites/new`, requestBody)
            .then((response) => {
                console.log(response)
                navigate(`/user/site/info/${response.data._id}`);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    //Furhter Information States

    return (
        <div>
            <NavbarSites />
            <div class="py-6 flex flex-row justify-center">
                <div class="flex flex-col w-72 bg-white drop-shadow-md rounded-lg">
                    <img class="object-cover rounded-tl-lg rounded-tr-lg"
                        src={infoImg} alt="generalInfoImg" />
                    <div class="px-5 py-3 space-y-2">
                        <h1 class="text-xl text-align: center" >Please provide <br /> General Information</h1>
                    </div>
                    <form class="flex flex-col px-5" onSubmit={handleSignupSubmit}>
                        <label>Site Name:  </label>
                        <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                            type="text"
                            value={siteName}
                            onChange={handleSiteName}
                            // tells the user that this field needs to be fielled in
                            required
                        />
                        <label>Project Number:  </label>
                        <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                            type="text"
                            value={projectNumber}
                            onChange={handleProjectNumber}
                        />
                        <label>Profil Number:  </label>
                        <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                            type="text"
                            value={profilNumber}
                            onChange={handleProfilNumber}

                        />
                        <label>Date:  </label>
                        <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                            type="date"
                            value={date}
                            onChange={handleDate}
                            defaultValue={date}
                        />
                        <div class="flex flex-col">
                            <label>Operator:  </label>
                            <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                type="text"
                                value={operator}
                                onChange={handleOperator}
                            />
                            <div class="flex flex-col">
                                <h1 class="flex flex-col py-3 space-y-2 text-lg">Geolocation</h1>
                                <label>Latitude:  </label>
                                <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                    type="number"
                                    value={latitude}
                                    onChange={handleLatitude}
                                />
                                <label>Longitude:  </label>
                                <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                    type="number"
                                    value={longitude}
                                    onChange={handleLongitude}
                                /></div>
                            <label>Elevation:  </label>
                            <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                type="text"
                                value={elevation}
                                onChange={handleElevation}
                            />
                            <label>Pulping Process:  </label>
                            <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                type="text"
                                value={pulpingprocess}
                                onChange={handlePulpingProcess}
                            />
                            <label>Keywords:  </label>
                            <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                type="text"
                                value={keywords}
                                onChange={handleKeywords}
                            />
                        </div>
                        <button type="submit" class="px-5 mt-3 mb-3 bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewSite;