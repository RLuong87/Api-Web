import React, { Fragment } from "react";
import NavButton from "./NavButton";

const Navbar = (props) => {
    return (
        <Fragment>
            <div style={{
                backgroundColor: "teal",
                position: "absolute",
                width: "100%",
                zIndex: 9999, // making sure the navbar is always at the top of the screen
                top: 0,
                left: 0,
                height: "75px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <h1 style={{
                    fontFamily: "georgia",
                    fontWeight: "bold",
                    fontSize: "2.5em",
                    margin: "0 20px",
                    textAlign: "left"
                }}>API WEB</h1>
                <div style={{
                    margin: "0 20px",
                    flexDirection: "row",
                    background: "transparent",
                    userSelect: "none",
                    textAlign: "right",
                }}>
                    <NavButton to="/" label="Home " />
                    <NavButton to="/news" label="News" />
                    <NavButton to="/weather" label="Weather" />
                    <NavButton to="/githubuser" label="GitHub" />
                    <NavButton to="/repo" label="Repo" />
                    <NavButton to="/catfact" label="Cat Facts" />
                </div>
            </div>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}

export default Navbar;