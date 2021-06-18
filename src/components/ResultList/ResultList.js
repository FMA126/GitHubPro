import Card from '../../baseComponents/Card/Card';

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        greeting: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        results: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    })
)

function ResultList (props) {
    const classes = useStyles();
    if(!props.userData) {
        return (
            <div className={classes.greeting}>
                <img src="./GitHub.png" alt="github logo"/>
                <div>User Search</div>
            </div>
        )
    } else {
        return (
            <>
                <div className={classes.results}>
                    {props.userData.map((userInfo, index) => (
                        <Card 
                        key={`${userInfo.data.id}`}
                        userName={userInfo.data.login}
                        avatar={userInfo.data.avatar_url}
                        location={userInfo.data.location}
                        realName={userInfo.data.name}
                        email={userInfo.data.email}
                        repoCount={userInfo.data.public_repos}
                        accountCreationDate={userInfo.data.created_at}
                        accountUpdateDate={userInfo.data.updated_at}
                        profileLink={userInfo.html_url}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default ResultList;