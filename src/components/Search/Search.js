import Select from '../../baseComponents/Select/Select';
import TextBox from '../../baseComponents/TextBox/TextBox';
import IconButton from '../../baseComponents/IconButton/IconButton';

import { makeStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        justifyContent: 'center',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1)
    },
    pageResults: {
        display: 'flex',
        alignItems: 'center'
    }
  }));

function Search (props) {
    const classes = useStyles();

    const searchOptions = [{
            term: 'User Name',
            value : 'user' }, 
        {
            term: 'Email',
            value: 'email',
        }
    ];

    const isPageInRangeHigh = () => {
        return !(props.searchFields.params.page === props.totalPages);
    }

    const isPageInRangeLow = () => {
        return !(props.searchFields.params.page === 1);
    }

    return (
        <>
            <div className={classes.search}>
                <Select             
                    name="Search By"
                    labelId="search-by-label"
                    id="search-by"
                    value={props.searchFields.params.category}
                    categoryChange={props.dispatch}
                    options={searchOptions}/>
                <TextBox
                    name={"User info"}
                    error={false}
                    id="user-text"
                    defaultValue={''}
                    value={props.searchFields.params.searchText}
                    helperText={props.searchFields.params.category === 'email' ? 'Must be valid email' : ''}
                    userTextChange={props.dispatch}
                />
            </div>
            <div className={classes.pagination}>
                <div className={classes.pageResults}>
                    <span>{`Displaying ${props.searchFields.params.page} of ${props.totalPages}`}</span>
                </div>
                <div>
                    <IconButton pageDirection='decrease' changeToPageNumber={props.dispatch} checkPageRange={isPageInRangeLow}>
                        <Icon>chevron_left</Icon>
                    </IconButton>
                    <IconButton pageDirection='increase' changeToPageNumber={props.dispatch} checkPageRange={isPageInRangeHigh}>
                        <Icon>chevron_right</Icon>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Search;