import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotesForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isPosting, setIsPosting] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPosting(true);
		const note = { title, content };
		fetch("/add/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		}).then(() => {
			setIsPosting(false);
			navigate('/')
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col mb-8">
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					className="bg-[#120E02] border-2 border-[#DBCB9C] rounded-lg h-12 px-4"
					required
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="my-4">
				<label htmlFor="content">Content: </label>
				<textarea
					name="content"
					id="content"
					required
					className="bg-[#120E02] border-2 border-[#DBCB9C] rounded-lg h-[300px] w-full px-4 py-4"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>
			<div className="w-full">
				{isPosting ? (
					<button
						className="px-4 py-2 border-2 rounded-lg mx-auto"
						disabled
					>
						Adding Note...
					</button>
				) : (
					<button
						type="submit"
						className="px-4 py-2 border-2 rounded-lg mx-auto"
					>
						Submit
					</button>
				)}
			</div>
		</form>
	);
};

export default NotesForm;
