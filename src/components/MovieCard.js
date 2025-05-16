import { Link } from "react-router";
import { Card, Button } from "react-bootstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

function MovieCard({ movie, onDelete, onEdit }) {
	return (
		<Card style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
				<Card.Img
					variant="top"
					src={movie.posterURL}
					alt={`${movie.title} Poster`}
					style={{ height: "250px", objectFit: "cover" }}
				/>
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>{movie.description.substring(0, 100)}...</Card.Text>
					<Card.Text>Rating: {movie.rating}/10</Card.Text>
				</Card.Body>
			</Link>
			<Card.Footer className="d-flex justify-content-around align-items-center">
				<Button
					variant="danger"
					size="sm"
					onClick={() => onDelete(movie.id)}
					aria-label={`Delete ${movie.title}`}>
					<FaTrashAlt />
				</Button>

				<Button
					variant="secondary"
					size="sm"
					onClick={() => onEdit(movie)}
					aria-label={`Edit ${movie.title}`}>
					<FaPencilAlt />
				</Button>
			</Card.Footer>
		</Card>
	);
}

export default MovieCard;
