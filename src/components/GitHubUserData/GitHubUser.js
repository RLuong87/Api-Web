import React, { useState, useEffect } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/RLuong87";

const GitHubUser = () => {
    const [userData, setUserData] = useState({});

    // useEffect(() => {
    //   getGitHubUserWithFetch();
    // })

    useEffect(() => {
        getGitHubUserWithAxios();
    })

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    const getGitHubUserWithAxios = async () => {
        const response = await axios.get(gitHubUrl);
        setUserData(response.data);
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h2>GitHub User Data</h2>
            </header>
            <div className='user-container'>
                <h5 className='info-item'>{userData.name}</h5>
                <h5 className='info-item'>{userData.location}</h5>
                <h5 className='info-item'>{userData.bio}</h5>
                {/* <h5 className='info-item'>{userData.publicemail}</h5> */}
            </div>
        </div>
    )
}

export default GitHubUser;