import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
	return notes.map((note) => (
		<Link to={`/notes/${note.id}`} key={note.id}>
			<div className="px-12 py-5 mb-5 rounded-xl shadow-md hover:shadow-[#0B0A07]">
				<h2 className="font-semibold my-3">{note.title}</h2>
				<hr />
				<p className="my-3">{note.content}</p>
			</div>
		</Link>
	));
};

export default NotesList;
