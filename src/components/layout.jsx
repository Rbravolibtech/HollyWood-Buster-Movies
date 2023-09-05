import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Layout(props) {
	return (
		<div className="navbar">
			<header>
				<Navbar expand="lg" className="bg-body-tertiary">
					<Container>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#index">Index</Nav.Link>
								<Nav.Link href="#movies.jsx">Movies</Nav.Link>
								<Nav.Link href="#tvseries">TvSeries</Nav.Link>
								<Nav.Link href="#search">Search</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			{props.children}
			<footer>
				<p>Powered by TMDb</p>
			</footer>
		</div>
	);
}
