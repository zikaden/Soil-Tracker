import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react'


function CreateSiteInfo(prop) {
    //new sets of keys and values for new site
    const [slope, setSlope] = useState("");
    const [exposition, setExposition] = useState("");
    const [formType, setFormType] = useState("");
    const [microRelief, setMicroRelief] = useState("");
    const [position, setPosition] = useState("");
    const [soilLoss, setSoilLoss] = useState("");
    const [landUse, setLandUse] = useState("");
    const [vegetationCover, setVegetationCover] = useState("");
    const [weatheringInfluences, setWeatheringInfluences] = useState("");
    const [anthropogenicInfluences, setAnthropogenicInfluences] = useState("");
    const [groundOrganism, setGroundOrganism] = useState("");



    // this get's us the value from the input field
    const handleSlope = (e) => setSlope(e.target.value);
    const handleExposition = (e) => setExposition(e.target.value);
    const handleFormType = (e) => setFormType(e.target.value);
    const handleMicroRelief = (e) => setMicroRelief(e.target.value);
    const handlePosition = (e) => setPosition(e.target.value);
    const handleSoilLoss = (e) => setSoilLoss(e.target.value);
    const handleLandUse = (e) => setLandUse(e.target.value);
    const handleVegetationCover = (e) => setVegetationCover(e.target.value);
    const handleWeatheringInfluences = (e) => setWeatheringInfluences(e.target.value);
    const handleAnthropogenicInfluences = (e) => setAnthropogenicInfluences(e.target.value);
    const handleGroundOrganism = (e) => setGroundOrganism(e.target.value);

    const navigate = useNavigate();

    //Handle submit event
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { relief: [slope, exposition, formType, microRelief, position], soilLoss, landUse, vegetationCover, weatheringInfluences, anthropogenicInfluences, groundOrganism };

        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        axios.post(`/sites/update`, requestBody)
            .then((response) => {
                navigate('/user/site/info');
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div>
            <div>
                <h1>Relief Information:</h1>
                <form onSubmit={handleSignupSubmit}>
                    <label>Slope:</label>
                    <input
                        type="text"
                        value={slope}
                        onChange={handleSlope}
                    />
                    <label>Exposition:</label>
                    <input
                        type="text"
                        value={exposition}
                        onChange={handleExposition}
                    />
                    <label>Form Type:</label>
                    <input
                        type="text"
                        value={formType}
                        onChange={handleFormType}
                    />
                    <label>Micro Relief:</label>
                    <input
                        type="date"
                        value={microRelief}
                        onChange={handleMicroRelief}
                    />
                    <div>
                        <label>Position:</label>
                        <input
                            type="text"
                            value={position}
                            onChange={handlePosition}
                        />
                        <div>
                            <label>Soil Loss:</label>
                            <input
                                type="text"
                                value={soilLoss}
                                onChange={handleSoilLoss}
                            />
                            <label>Land Use:</label>
                            <input
                                type="text"
                                value={landUse}
                                onChange={handleLandUse}
                            /></div>
                        <label>Vegetation Cover:</label>
                        <input
                            type="text"
                            value={vegetationCover}
                            onChange={handleVegetationCover}
                        />
                        <label>Weathering Influences:</label>
                        <input
                            type="text"
                            value={weatheringInfluences}
                            onChange={handleWeatheringInfluences}
                        />
                        <label>Anthropogenic Influences:</label>
                        <input
                            type="text"
                            value={anthropogenicInfluences}
                            onChange={handleAnthropogenicInfluences}
                        />
                        <label>Ground Organism:</label>
                        <input
                            type="text"
                            value={groundOrganism}
                            onChange={handleGroundOrganism}
                        />
                        <button type="submit" class="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateSiteInfo;