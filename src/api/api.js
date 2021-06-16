import { Octokit } from "@octokit/core";

const baseUrl = 'https://api.github.com'; //search/users?';
const octokit = new Octokit({ auth: `${process.env.ACCESS_TOKEN}` });

const get = async (params) => {
    // console.log(params)
    try {

    } catch (error) {
        console.error(error)
    }
}

export default get();