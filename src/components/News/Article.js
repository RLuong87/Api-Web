import React, { useState, useEffect } from "react";

const Article = () => {
    const [news, setNews] = useState('');
    const [data, setData] = useState([{}]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
            'X-RapidAPI-Key': 'b0ec7bff31mshc6a3108dbbd086ap147cdejsnef91376f5575'
        }
    };

    const search = (e) => {
        if (e.key === "Enter") {
            fetch(`https://google-news1.p.rapidapi.com/search?q=${news}&country=US&lang=en&source=cnn.com&limit=50&when=30d`, options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
    }

    useEffect(() => {
        getNewsWithFetch();
    }, [])


    const getNewsWithFetch = async () => {
        const res = await fetch(`https://google-news1.p.rapidapi.com/search?q=${news}&country=US&lang=en&source=cnn.com&limit=50&when=30d`);
        const jsonData = await res.json();
        setData(jsonData);
    }

    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }}>
                Get the latest news
            </h1>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setNews(e.target.value)}
                    value={news}
                    onKeyPress={search}
                />
            </div>
        </div>
    )
}

export default Article;