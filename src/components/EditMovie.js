
import React, { useState, useEffect } from "react"; 
import { Modal, Button, Form } from "react-bootstrap";

function EditMovie({ show, handleClose, movie, handleUpdateMovie }) {
	const [editedMovie, setEditedMovie] = useState({
		id: null, 
		title: "",
		description: "",
		posterURL: "",
		rating: "",
	});

	useEffect(() => {
		if (movie) {
			setEditedMovie({
				id: movie.id,
				title: movie.title || "",
				description: movie.description || "",
				posterURL: movie.posterURL || "",
				rating: movie.rating !== undefined ? movie.rating.toString() : "", 
			});
		}
	}, [movie]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setEditedMovie((prevMovie) => ({
			...prevMovie,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		if (
			editedMovie.title &&
			editedMovie.description &&
			editedMovie.posterURL &&
			editedMovie.rating !== ""
		) {
			handleUpdateMovie({
				...editedMovie,
				rating: parseFloat(editedMovie.rating), 
			});
			handleClose();
		} else {
			alert("Please fill in all fields."); 
		}
	};

	if (!movie) {
		return null;
	}

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Movie</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="editFormTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							name="title"
							value={editedMovie.title}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="editFormDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea" 
							rows={3}
							placeholder="Enter movie description"
							name="description"
							value={editedMovie.description}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="editFormPosterURL">
						<Form.Label>Poster URL</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter poster URL"
							name="posterURL"
							value={editedMovie.posterURL}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="editFormRating">
						<Form.Label>Rating</Form.Label>
						<Form.Control
							type="number"
							step="0.1"
							min="0"
							max="10"
							placeholder="Enter rating (0-10)"
							name="rating"
							value={editedMovie.rating}
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
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditMovie;
