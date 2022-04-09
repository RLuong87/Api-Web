import React from "react";
import { Route, Routes } from "react-router-dom";
import WeatherApi from "../components/Weather/WeatherApi"
import GitHubUser from "../components/GitHubUserData/GitHubUser"
import Home from "../components/Home/Home";
import LoadList from "../components/GitHubUserData/LoadList";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {
    return (
        <div style={{ width: "100%", flexDirection: "column" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<WeatherApi />} />
                <Route path="/githubuser" element={<GitHubUser />} />
                <Route path="/repo" element={<LoadList />} />
            </Routes>
        </div>
    )
}

export default AppRouter;