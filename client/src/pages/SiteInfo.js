import infoImg from '../assets/site_info_general information.png'
import NavbarSiteInfo from './NavBarSiteInfo'
import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function SiteInfo() {
    //new sets of keys and values for updated site
    const [siteName, setSiteName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [profilNumber, setProfilNumber] = useState("");
    const [date, setDate] = useState("");
    const [operator, setOperator] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [elevation, setElevation] = useState("");
    const [pulpingprocess, setPulpingProcess] = useState("");
    const [keywords, setKeywords] = useState("");

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

    const { siteID } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5005/api/sites/${siteID}`)
            .then(response => {
                setSiteName(response.data.titleInformation.siteName)
                setProjectNumber(response.data.titleInformation.projectNumber)
                setProfilNumber(response.data.titleInformation.profilNumber)
                setDate(response.data.titleInformation.date)
                setOperator(response.data.titleInformation.operator)
                setLatitude(response.data.titleInformation.latitude)
                setLongitude(response.data.titleInformation.longitude)
                setElevation(response.data.titleInformation.elevation)
                setPulpingProcess(response.data.titleInformation.pulpingprocess)
                setKeywords(response.data.titleInformation.keywords)
            })
            .catch(err => console.log(err))
    }, [siteID])


    //Handle submit event
    const handleUpdateSubmit = (e) => {

        const requestBody = { siteName, projectNumber, profilNumber, date, operator, geolocation: { latitude, longitude }, elevation, pulpingprocess, keywords };

        axios.post(`http://localhost:5005/api/sites/update/${siteID}`, requestBody)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log(error)
            })
    };


    return (
        <div>
            <NavbarSiteInfo />
            <div class="py-6 flex flex-row justify-center">
                <div class="flex flex-col w-72 bg-white drop-shadow-md rounded-lg">
                    <img class="object-cover rounded-tl-lg rounded-tr-lg"
                        src={infoImg} alt="generalInfoImg" />
                    <div class="px-5 py-3 space-y-2">
                        <h3 class="text-xl">General Information</h3>
                    </div>
                    <form class="flex flex-col px-5" onSubmit={handleUpdateSubmit}>
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
                            type="text"
                            value={new Date(date).toDateString()}
                            onChange={handleDate}
                        />
                        <div class="flex flex-col" >
                            <label>Operator:  </label>
                            <input class="bg-teal-100 rounded duration-300 text-m text-slate-500"
                                type="text"
                                value={operator}
                                onChange={handleOperator}
                            />
                            <div class="flex flex-col">
                                <h2 class="flex flex-col py-3 space-y-2 text-lg">Geolocation</h2>
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
                        <button type="submit" class=" px-5 mt-3 mb-3 bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SiteInfo;