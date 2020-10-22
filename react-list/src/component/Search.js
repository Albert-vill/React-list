import React, {useState,useEffect} from 'react'
import List from './List';
import '../Search.css'

const Search = () => {
    const [searchState,setSearchState] = useState({
        query:"",
    });

     const onChange = e =>{
        const query = e.target.value;
            setSearchState({query})
    };

    return(
        <div className="container">
            <h2 className="heading">Live Search</h2>
            <form>
                <input type="text" className="search-box..." onChange={onChange}/>
            </form>
        </div>
    )

}

export default Search;
