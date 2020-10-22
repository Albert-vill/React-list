import React from 'react';

const List = (repositorios) => {
    const {repos} = {...repositorios};
    if(!repos || repos.length === 0) return <p>No repos</p>
    return(
        <ul>
            <h2 className='list-head'> Available Public Repositories</h2>
            {repos.map((repo) => {
                return(
                    <li key={repo.id} className='list'>
                        <span className='repo-name'>{repo.name}</span>
                        <span className='repo-description'>{repo.description}</span>
                        <span className='repo-id'>{repo.id}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default List;