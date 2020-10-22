import React from 'react';

const List = (people) => {
    const person = people;
    return(
        <ul>
            <h2 className='list-head'> Character characteristic</h2>
            {person.people.map((char) => {
                return(
                   <ul key={char.id} className='list'>
                        <li className='char-name'> Nombre: {char.name} </li>
                        <li className='char-birthyear'>Cumpleaños: {char.birth_year}</li>
                        <li className='char-gender'>Lugar de origen{char.gender}</li>
                        <li className='char-height'>Altura {char.height} CM</li>
                    </ul>
                );
            })}
        </ul>
    );
}

export default List;