import MovieCard from "./MovieCard";
import { Row, Col } from "react-bootstrap";

function MovieList({ movies, onDelete, onEdit }) {
	return (
		<Row className="justify-content-center">
			{movies.map((movie) => (
				<Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
					<MovieCard movie={movie} onDelete={onDelete} onEdit={onEdit} />
				</Col>
			))}
		</Row>
	);
}

export default MovieList;
