import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);

	const addNote = (title, content) => {
		setNotes((prev) => {
			const newNote = { title: title, content: content };
			return [newNote, ...prev];
		});
	};

	const deleteNote = (title, content) => {
		setNotes((prev) => {
			return notes.filter(
				(note) => note.title !== title && note.content !== content
			);
		});
	};

	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
			{notes.map((note) => {
				return (
					<Note
						key={uuidv4()}
						deleteNote={deleteNote}
						title={note.title}
						content={note.content}
					/>
				);
			})}
			{/* <Note
				key={uuidv4()}
				deleteNote={deleteNote}
				title="Note title"
				content="Note content"
			/> */}
			<Footer />
		</div>
	);
}

export default App;
