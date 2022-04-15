import React from "react";
import { Route, Routes } from "react-router-dom";
import OpenWeather from "../components/Weather/OpenWeather"
import GitHubUser from "../components/GitHubUserData/GitHubData"
import Home from "../components/Home/Home";
import LoadList from "../components/GitHubUserData/LoadList";
import RandomCatFact from "../components/Catfact/RandomCatFact";
import Article from "../components/News/Article";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {
    return (
        <div style={{ width: "100%", flexDirection: "column" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<OpenWeather />} />
                <Route path="/githubuser" element={<GitHubUser />} />
                <Route path="/repo" element={<LoadList />} />
                <Route path="/catfact" element={<RandomCatFact /> } />
                <Route path="/news" element={<Article /> } />
            </Routes>
        </div>
    )
}

export default AppRouter;