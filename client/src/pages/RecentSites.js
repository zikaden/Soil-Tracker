import NavbarSites from "./NavBarSites";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useContext } from "react";


function RecentSites() {
    const [result, setResult] = useState([]);
    const { user } = useContext(AuthContext);
    const userID = user._id

    useEffect(() => {
        axios.get(`http://localhost:5005/api/sites/recent/${userID}`)
            .then(response => {
                console.log(response)
                setResult(response.data)
            })
            .catch(err => console.log(err))
    }, [userID])

    return (
        <div>
            <NavbarSites />
            <h1>List of Recent Sites needs to be created</h1>
            {result.map((data, i) => (
                <Link to={`/user/site/info/${data._id}`} key={i} ><h1 >{data.titleInformation.siteName}</h1>
                    <h1>{new Date(data.titleInformation.date).toDateString()} </h1>
                </Link>
            ))}
        </div>
    );
}

export default RecentSites;