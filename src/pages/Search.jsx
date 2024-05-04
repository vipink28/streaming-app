import React, { useEffect, useState } from 'react';
import { apirequests } from '../utility/apireqeusts';
import axios from '../utility/axios';
import { useSelector } from 'react-redux';
import { querySelector } from '../features/common/commonSlice';
import Card from '../components/Card';
function Search(props) {
    const [searchResults, setSearchResults] = useState(null);
    const query = useSelector(querySelector);

    const fetchSearchResults = async (platform, query) => {
        const response = await axios.get(apirequests.getSearch(platform, query));
        setSearchResults(response.data.results);
    }
    useEffect(() => {
        fetchSearchResults('movie', query)
    }, [query])

    return (
        <div className='py-5 container-fluid'>
            <div className='row gy-4'>
                {
                    searchResults?.map((video) => {
                        return (
                            <div key={video?.id} className='col-md-3'>
                                <Card video={video} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Search;