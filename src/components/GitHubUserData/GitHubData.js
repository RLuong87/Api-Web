import React, { useState, useEffect } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/";

const GitHubData = () => {
    const [user, setUser] = useState('');
    const [userData, setData] = useState([{}]);

    // useEffect(() => {
    //   getGitHubUserWithFetch();
    // })

    const search = e => {
        if (e.key == "Enter") {
            fetch(`https://api.github.com/users/${user}`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setUser('');
                    console.log(data);
                })
        }
    }

    useEffect(() => {
        getGitHubUserWithAxios();
    })

    // const getGitHubUserWithFetch = async () => {
    //     const response = await fetch(gitHubUrl);
    //     const jsonData = await response.json();
    //     setData(jsonData);
    // };

    const getGitHubUserWithAxios = async () => {
        const response = await axios.get(gitHubUrl);
        setUser(response.data);
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>GitHub User Data</h1>
            </header>
            <div>Seach by Github Username</div>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    onKeyPress={search}
                />
            </div>
            <div className="app git"></div>
            <div className='user-container'>
                <h5 className='info-item'>{userData.name}</h5>
                <h5 className='info-item'>{userData.location}</h5>
                <h5 className='info-item'>{userData.bio}</h5>
            </div>
        </div>
    )
}

export default GitHubData;