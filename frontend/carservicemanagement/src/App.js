import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListFunc from "./components/jobListComponent";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/footerComponent";
import NewJobComponent from "./components/newJobComponent";
import UpdateComponent from "./components/updateComponent";

function App() {
	return (
		<div>
			<BrowserRouter>
				<HeaderComponent />
				<div className="container">
					<div className="container">
						<Routes>
							<Route path="/" element={<JobListFunc />}></Route>
							<Route
								path="/jobs"
								element={<JobListFunc />}
							></Route>
							<Route
								path="/new-job"
								element={<NewJobComponent />}
							></Route>
							<Route
								path="/update/:id"
								element={<UpdateComponent />}
							></Route>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
