import { Form, Row, Col } from "react-bootstrap";

function Filter({ onFilterChange }) {
	const handleTitleChange = (event) => {
		onFilterChange({ title: event.target.value });
	};

	const handleRatingChange = (event) => {
		const rating = parseFloat(event.target.value);
		onFilterChange({ rating: isNaN(rating) ? "" : rating });
	};

	return (
		<Form className="mb-4">
			<Row className="g-2">
				{" "}
				<Col md>
					<Form.Group controlId="filterTitle">
						<Form.Label>Filter by Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							onChange={handleTitleChange}
						/>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group controlId="filterRating">
						<Form.Label>Filter by Rating</Form.Label>
						<Form.Control
							type="number"
							step="0.1"
							min="0"
							max="10"
							placeholder="Enter minimum rating (0-10)"
							onChange={handleRatingChange}
						/>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
}

export default Filter;
