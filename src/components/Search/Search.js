import { useState } from 'react';
import Select from '../../baseComponents/Select/Select';
import TextBox from '../../baseComponents/TextBox/TextBox';

function Search () {
    const [searchCategory, setSearchCategory] = useState('');
    const [searchText, setSearchText] = useState('');

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
        switch (event.target.name) {
            case 'Search By':
                setSearchCategory(event.target.value);
                break;
            case 'User info':
                setSearchText(event.target.value);
                break;
            default:

        }
    }
    return (
        <>
            <Select             
                name="Search By"
                labelId="search-by-label"
                id="search-by"
                value={searchCategory}
                categoryChange={handleChange}
                options={searchOptions}/>
            <TextBox
                name={"User info"}
                error={false}
                id="user-text"
                defaultValue={searchText}
                helperText={searchCategory === 'email' ? 'Must be valid email' : ''}
                userTextChange={handleChange}
            />
        </>
    )
}

export default Search;