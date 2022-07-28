import NavbarSites from "./NavBarSites";
import axios from "axios";
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchSites() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = (e) => setSearch(e.target.value);


    const handleSearchKey = () => {
        console.log(search)
        //http://localhost:5005/api/sites/search/${search}
        axios.get(`/api/sites/search/${search}`)
            .then((response) => {
                setResult(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div>
            <NavbarSites />
            <div class="pt-12 flex justify-center">
                <div class="mb-3 xl:w-96">
                    <div class="flex flex-direction: row md:items-stretch w-full mb-4">
                        <input onChange={handleSearch} value={search} type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Enter Name/Keyword" aria-label="Search" aria-describedby="button-addon2" />
                        <button onClick={handleSearchKey} class="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {result.map((data, i) => (
                <Link class="flex items-center justify-between flex-wrap bg-teal-500 border-2 border-white p-6" to={`/user/site/info/${data._id}`} key={i} >
                    <div class="justify-between flex-shrink-0 text-white mr-6">
                        <div class="font-semibold text-xl tracking-tight md:pb-3">
                            <h1>{data.titleInformation.siteName}</h1>
                        </div>
                        <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            <h1>{new Date(data.titleInformation.date).toDateString()}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SearchSites;