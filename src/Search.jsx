import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (searchTerm === "") return;

        fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`)
            .then(response => response.json())
            .then(data => setShows(data.map(result => result.show)));
    }, [searchTerm]);

    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(query);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a TV show..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="grid">
                {shows.map(show => (
                    <Link to={`/show/${show.id}`} key={show.id} className="card">
                        {show.image && <img src={show.image.medium} alt={show.name} />}
                        <p>{show.name}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Search;