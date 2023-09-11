import Container from "react-bootstrap/Container";
import "../index.css";

function Page() {
	return (
		<Container className="mainContent">
			<div>
				<p>Welcome to Hollywood-Buster</p>
			</div>
			<div>
				<p>Movies</p>
			</div>
			<div>
				<p>TV Shows</p>
			</div>
		</Container>
	);
}

export default Page;
