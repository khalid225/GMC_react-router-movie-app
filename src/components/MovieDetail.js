import { useParams, Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import moviesData from "../data/movies";

function MovieDetail() {
	const { id } = useParams();

	const movie = moviesData.find((m) => m.id === parseInt(id));
	if (!movie) {
		return (
			<Container className="mt-5 text-center">
				<h2>Movie not found</h2>
				<Link to="/">
					<Button variant="primary" className="mt-3">
						Back to Home
					</Button>
				</Link>
			</Container>
		);
	}

	return (
		<Container className="mt-5">
			<div className="text-center mb-4">
				<h2>{movie.title}</h2>
				<p className="text-muted">{movie.rating}/10 Rating</p>
			</div>

			<Row className="justify-content-center">
				<Col md={6}>
					{movie.trailerLink && (
						<div className="mt-4 embed-responsive embed-responsive-16by9">
							<iframe
								className="embed-responsive-item"
								src={movie.trailerLink}
								title={`${movie.title} Trailer`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								style={{ width: "100%", height: "315px" }}></iframe>
						</div>
					)}
					<Card>
						<Card.Body>
							<Card.Title>Description</Card.Title>
							<Card.Text>{movie.description}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="text-center mb-4">
					<img
						src={movie.posterURL}
						alt={`${movie.title} Poster`}
						style={{
							maxWidth: "100%",
							height: "auto",
							maxHeight: "400px",
							boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
						}}
						className="rounded"
					/>
				</Col>
			</Row>

			<div className="text-center mt-4">
				<Link to="/">
					{" "}
					<Button variant="primary">Back to Home</Button>
				</Link>
			</div>
		</Container>
	);
}

export default MovieDetail;
