import React, { useEffect, useState } from "react";
import List from "./List";
import WithListLoading from "./WithListLoading";

function LoadList() {
    const ListLoading = WithListLoading(List);
    const [listState, setListState] = useState({
        loading: false,
        repos: null,
    })

    useEffect(() => {
        setListState({ loading: true });
        const apiUrl = `https://api.github.com/users/RLuong87/repos`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setListState({ loading: false, repos: repos });
            });
    }, [setListState]);
    return (
        <div className="LoadList">
            <div className="container">
                <h1>My Repositories</h1>
            </div>
            <div className="repo-container">
                <ListLoading isLoading={listState.loading} repos={listState.repos} />
            </div>
            <footer>
                <div className="footer">
                    Built{' '}
                    <span role='img' aria-label='love'>
                    </span>{' '}
                    with
                    💚
                    by Richies Luong
                </div>
            </footer>
        </div>
    )
}

export default LoadList;