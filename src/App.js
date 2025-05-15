import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import EditMovieModal from "./components/EditMovie";
import initialMovies from "./data/movies";

function App() {
	const [movies, setMovies] = useState(initialMovies);

	const [filter, setFilter] = useState({ title: "", rating: "" });
	const [showAddModal, setShowAddModal] = useState(false);

	const [editingMovie, setEditingMovie] = useState(null);
	const [showEditModal, setShowEditModal] = useState(false);

	const handleFilterChange = (newFilter) => {
		setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
	};

	const handleAddMovie = (newMovie) => {
		setMovies((prevMovies) => [...prevMovies, newMovie]);
	};

	const handleDeleteMovie = (id) => {
		setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
	};

	const handleEditMovie = (movie) => {
		setEditingMovie(movie);
		setShowEditModal(true);
	};
	const handleUpdateMovie = (updatedMovie) => {
		setMovies((prevMovies) =>
			prevMovies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
		);
		setEditingMovie(null);
		setShowEditModal(false);
	};

	const handleCloseEditModal = () => {
		setEditingMovie(null);
		setShowEditModal(false);
	};

	const handleShowAddModal = () => setShowAddModal(true);
	const handleCloseAddModal = () => setShowAddModal(false);

	const filteredMovies = useMemo(() => {
		return movies.filter((movie) => {
			const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());

			const ratingMatch = filter.rating === "" || movie.rating >= filter.rating;

			return titleMatch && ratingMatch;
		});
	}, [movies, filter]);

	return (
		<Container className="App mt-5">
			<h1 className="text-center mb-4">My Movie App</h1>

			<Filter onFilterChange={handleFilterChange} />

			<div className="text-center mb-4">
				<Button variant="success" onClick={handleShowAddModal}>
					Add New Movie
				</Button>
			</div>

			<MovieList movies={filteredMovies} onDelete={handleDeleteMovie} onEdit={handleEditMovie} />

			<AddMovie
				show={showAddModal}
				handleClose={handleCloseAddModal}
				handleAddMovie={handleAddMovie}
			/>

			<EditMovieModal
				show={showEditModal}
				handleClose={handleCloseEditModal}
				movie={editingMovie} 
				handleUpdateMovie={handleUpdateMovie}
			/>
		</Container>
	);
}

export default App;
