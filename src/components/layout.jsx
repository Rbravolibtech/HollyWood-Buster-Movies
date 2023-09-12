import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";

export default function Layout(props) {
	return (
		<div className="navbar">
			<header>
				<Navbar
					expand="lg"
					className="bg-body-tertiary sideNav"
					style={{ width: "10%", paddingTop: "5%" }}
				>
					<Container>
						<img className="logo" src="/logo-transparent-svg.svg"></img>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<br />
								<Nav.Link href="movies">Movies</Nav.Link>
								<br />
								<Nav.Link href="tvseries">Tv Shows</Nav.Link>
								<br />
								<Nav.Link href="search">Search</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			<div>
				<h1>Endless Movie Fun!</h1>
			</div>
			{props.children}
			<footer>
				<p>Powered by TMDb</p>
			</footer>
		</div>
	);
}
