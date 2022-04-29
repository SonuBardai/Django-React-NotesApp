import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteNotes = () => {
    const navigator = useNavigate();

	const handleDelete = (e) => {
		e.preventDefault();
		fetch(`/remove`, {
			method: "DELETE",
		}).then(() => {
			navigator("/");
		});
	};

	return (
		<div className="h-[100vh] px-12 py-12">
			<div className="font-bold text-center text-[#DBCB9C] text-xl">
				Delete All Notes?
			</div>
			<div className="my-8 flex justify-center">
				<button
					onClick={handleDelete}
					className="px-4 py-2 mx-12 border-2 text-[#C33C54] rounded-lg"
				>
					Confirm
				</button>
				<Link to={"/"}>
					<button className="px-4 py-2 mx-12 border-2 text-[#DBCB9C] rounded-lg">
						Cancel
					</button>
				</Link>
			</div>
		</div>
	);
};

export default DeleteNotes;
