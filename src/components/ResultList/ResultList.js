import Card from '../../baseComponents/Card/Card';

function ResultList (props) {
    if(!props.userData) {
        return (
            <div>Results</div>
        )
    } else {
        return (
            <>
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
            </>
        )
    }
}

export default ResultList;