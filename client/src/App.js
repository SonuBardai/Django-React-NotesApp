import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NoteDetail from "./pages/NoteDetail";
import DeleteNotes from "./pages/DeleteNotes";
import NoPageFound from "./pages/NoPageFound";

function App() {
	return (
		<Router>
			<div className="bg-[#120E02]">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/notes/:id" element={<NoteDetail />} />
					<Route path="/create" element={<Create />} />
					<Route path="/clear" element={<DeleteNotes />} />
					<Route path="/*" element={<NoPageFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
