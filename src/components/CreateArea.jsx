import React, { useState } from "react";

function CreateArea(props) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleTitleChange = (event) => {
		const updatedTitle = event.target.value;
		setTitle(updatedTitle);
	};

	const handleContentChange = (event) => {
		const updatedContent = event.target.value;
		setContent(updatedContent);
	};

	return (
		<div>
			<form autoComplete="off">
				<input
					value={title}
					onChange={handleTitleChange}
					name="title"
					placeholder="Title"
				/>
				<textarea
					value={content}
					onChange={handleContentChange}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
				<button
					type="button"
					onClick={() => {
						props.addNote(title, content);
						setTitle("");
						setContent("");
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
