import { useState } from 'react';
import Select from '../../baseComponents/Select/Select';

function Search () {
    const [searchCategory, setSearchCategory] = useState('');
    const searchOptions = [{
            term: 'User Name',
            value : 'user' }, 
        {
            term: 'Email',
            value: 'email',
        }
    ];

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchCategory(event.target.value)
    }
    return (
        <>
            <Select             
                name='Search By'
                labelId={'search-by-label'}
                id={'search-by'}
                value={searchCategory}
                categoryChange={handleChange}
                options={searchOptions}/>
        </>
    )
}

export default Search;