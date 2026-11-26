import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => setShow(data));
    }, [id]);

    if (show === null) {
        return <p>Loading...</p>;
    }

    return (
        <div className="details">
            <Link to="/">← Back to search</Link>
            <h2>{show.name}</h2>
            {show.image && <img src={show.image.original} alt={show.name} />}
            <p><strong>Genres:</strong> {show.genres.join(", ")}</p>
            <p><strong>Premiered:</strong> {show.premiered}</p>
            <p><strong>Rating:</strong> {show.rating.average ?? "N/A"}</p>
            <p>{show.summary ? show.summary.replace(/<[^>]+>/g, "") : "No summary available."}</p>
        </div>
    );
}

export default ShowDetails;