import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NoteDetail = () => {
	const { id } = useParams();
	const { data: note, error, isLoading } = useFetch(`/notes/${id}`);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isPosting, setIsPosting] = useState(false);

	const navigator = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPosting(true);
		const note = { title, content };
		fetch(`/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		}).then(() => {
			setIsPosting(false);
			navigator("/");
		});
	};

	const handleDelete = (e) => {
		e.preventDefault();
		fetch(`/remove/${id}`, {
			method: "DELETE",
		}).then(() => {
			navigator("/");
		});
	};

	return (
		<div>
			{isLoading && <h2 className="font-bold mx-12 my-4 text-[#DBCB9C] h-[100vh]">Loading...</h2>}
			{error && (
				<h2 className="font-bold h-[100vh] text-[#C33C54]">
					Error: {error}
				</h2>
			)}
			{note && (
				<form onSubmit={handleSubmit}>
					<div className="mt-4 mx-12">
						<div className="w-full text-[#DBCB9C] flex justify-between">
							{isPosting ? (
								<button
									className="px-4 py-2 border-2 rounded-lg"
									disabled
								>
									Updating Note...
								</button>
							) : (
								<button
									type="submit"
									className="px-4 py-2 border-2 rounded-lg"
								>
									Back
								</button>
							)}
							<button
								className="px-4 py-2 border-2 text-[#C33C54] rounded-lg"
								onClick={handleDelete}
							>
								Delete
							</button>
						</div>
					</div>
					<div className="px-12 py-5 rounded-xl text-[#DBCB9C] h-[100vh]">
						<div className="flex flex-col mb-8">
							<label htmlFor="title">Title: </label>
							<input
								type="text"
								className="bg-[#120E02] border-2 border-[#DBCB9C] rounded-lg h-12 px-4"
								name="title"
								value={title ? title : note.title}
								id="title"
								onChange={(e) => {
									setTitle(e.target.value);
									setContent(
										document.getElementById("content").value
									);
								}}
							/>
						</div>
						<div className="my-4">
							<label htmlFor="content">Content: </label>
							<textarea
								name="content"
								id="content"
								className="bg-[#120E02] border-2 border-[#DBCB9C] rounded-lg h-[300px] w-full px-4 py-4"
								value={content ? content : note.content}
								onChange={(e) => {
									setTitle(
										document.getElementById("title").value
									);
									setContent(e.target.value);
								}}
							></textarea>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default NoteDetail;
