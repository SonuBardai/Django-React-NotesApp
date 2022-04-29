import NotesList from "../components/NotesList";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
	const { data: notes, error, isLoading } = useFetch("/notes");

	return (
		<div className="px-20 py-10 text-[#DBCB9C]">
			{notes && notes.length>0 ? (
				<Link to={"/clear"}>
					<button
						className="px-4 py-2 mx-12 border-2 text-[#C33C54] rounded-lg"
					>
						Delete All
					</button>
				</Link>
			) : <h1 className="text-2xl text-center">No Notes To Show</h1>}
			{isLoading && <h2 className="font-bold h-[100vh]">Loading...</h2>}
			{error && (
				<h2 className="font-bold h-[100vh] text-[#C33C54]">
					Error: {error}
				</h2>
			)}
			{notes && <NotesList notes={notes} />}
		</div>
	);
};

export default Home;
