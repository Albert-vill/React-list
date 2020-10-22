import React, {useState} from 'react'
import List from './List';
import '../Search.css'

const Search = () => {
    const [searchState,setSearchState] = useState({
        query: "",
        result: null,
    });

    const onChange = e =>{
        const query = e.target.value;
            setSearchState({query:query})
            fetchSearchResults(query)
    };

    const fetchSearchResults = query => {
        const url= `https://swapi.dev/api/people?search=${query}`;
        fetch(url)
            .then((res) => res.json())
            .then((people) =>{
                setSearchState({result:people.results});
            });
        };

    if(searchState.result != null){
        return (
            <div className="container">
                <h2 className="heading">Live Search</h2>
                <form>
                    <input type="text" className="search-box..." onChange={onChange} placeholder="Search..."/>
                </form>
                <div className="repo-container">
                <List people={searchState.result}/>
                </div>
            </div>
          );
    }else{
        return(
            <div className="container">
                <h2 className="heading">Live Search</h2>
                <form>
                    <input type="text" className="search-box..." onChange={onChange} placeholder="Search..."/>
                </form>
                <div className="repo-container">
                    <p>Nada que mostrar</p>
                </div>
            </div>
        )
    }

}

export default Search;
