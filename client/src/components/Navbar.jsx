import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="bg-[#0B0A07] shadow-sm shadow-[#0B0A01] sticky top-0">
			<div className="flex items-center justify-between text-[#DBCB9C] max-w-5xl mx-auto">
				<div className="text-2xl font-bold px-12">
					<Link to="/" className="text-[#FF5500] flex items-center">
						<img
							src="data:image/png;base64,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"
							className="w-[45px] mx-2"
						/>
						<h1 className="mx-2">myNotes.com</h1>
					</Link>
				</div>
				<div className="flex gap-3 py-4 px-12">
					<Link to="/" className="px-4">
						Home
					</Link>
					<Link to="/create" className="px-4">
						Add Note
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
