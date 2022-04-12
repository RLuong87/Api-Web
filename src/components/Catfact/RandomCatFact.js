import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomCatFact() {
    const [fact, setFact] = useState("");

    const fetchFact = () => {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((data) => setFact(data.fact))
    }

    const fetchFactAxios = () => {
        axios.get("https://catfact.ninja/fact").then((response) => {
            setFact(response.data.fact);
        })
    }

    useEffect(() => {
        // fetchFact();
        fetchFactAxios();
    }, []);

    const handleClick = () => {
        // fetchFact();
        fetchFactAxios();
    }

    return (
        <div className="App">
            <h2>Press the button for a random cat fact</h2>
            <hr />
            <button onClick={() => handleClick()}>Get Cat Fact</button>
            <p>{fact}</p>
            <div className="app cat"></div>
        </div>
    )
}

export default RandomCatFact;