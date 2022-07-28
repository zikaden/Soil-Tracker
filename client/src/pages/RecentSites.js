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
        //http://localhost:5005/api/sites/recent/${userID}
        axios.get(`/api/sites/recent/${userID}`)
            .then(response => {
                console.log(response)
                setResult(response.data)
            })
            .catch(err => console.log(err))
    }, [userID])

    return (
        <div>
            <NavbarSites />
            <h1 class="tracking-wide text-xl pb-3 md:text-3xl md:pb-12 md:pt-18">List of Recent Sites needs to be created</h1>
            {result.map((data, i) => (
                <Link to={`/user/site/info/${data._id}`} key={i} class="flex items-center justify-between flex-wrap bg-teal-500 border-2 border-white p-6">
                    <div class="justify-between flex-shrink-0 text-white mr-6">
                        <div class="font-semibold text-xl tracking-tight md:pb-3">
                            <h1 >{data.titleInformation.siteName}</h1>
                        </div>
                        <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            <h1>{new Date(data.titleInformation.date).toDateString()} </h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default RecentSites;