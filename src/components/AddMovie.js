import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddMovie({ show, handleClose, handleAddMovie }) {
	const [newMovie, setNewMovie] = useState({
		title: "",
		description: "",
		posterURL: "",
		rating: "",
		trailerLink: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewMovie((prevMovie) => ({
			...prevMovie,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		if (
			newMovie.title &&
			newMovie.description &&
			newMovie.posterURL &&
			newMovie.rating &&
			newMovie.trailerLink
		) {
			handleAddMovie({
				...newMovie,
				rating: parseFloat(newMovie.rating),
				id: Date.now(),
			});
			setNewMovie({
				title: "",
				description: "",
				posterURL: "",
				rating: "",
				trailerLink: "",
			});
			handleClose();
		} else {
			alert("Please fill in all fields.");
		}
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add New Movie</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="formTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							name="title"
							value={newMovie.title}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Enter movie description"
							name="description"
							value={newMovie.description}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formPosterURL">
						<Form.Label>Poster URL</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter poster URL"
							name="posterURL"
							value={newMovie.posterURL}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formTrailerURL">
						<Form.Label>Trailer URL</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Trailer URL"
							name="trailerURL"
							value={newMovie.trailerLink}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formRating">
						<Form.Label>Rating</Form.Label>
						<Form.Control
							type="number"
							step="0.1"
							min="0"
							max="10"
							placeholder="Enter rating (0-10)"
							name="rating"
							value={newMovie.rating}
							onChange={handleChange}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Add Movie
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddMovie;
