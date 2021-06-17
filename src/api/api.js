import { Octokit } from "@octokit/core";

const baseUrl = 'https://api.github.com'; //search/users?';
const octokit = new Octokit({ 
    baseUrl: 'https://api.github.com',
    auth: `${process.env.REACT_APP_ACCESS_TOKEN}` 
});

export const getUsers = (params) => {
    console.log('api params', params)
    return octokit.request('GET /search/users', {
        headers: {
            'Accept': 'application/vnd.github.v3.text-match+json',
        },
        q: `${params.searchText} in:${params.category}`,
        per_page: 10,
        page: 1 // params.page
    })
}

export const getUserData = (userName) => {
    return octokit.request(`GET /users/${userName}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
        },
    })
}
