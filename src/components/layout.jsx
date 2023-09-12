import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
	return (
		<>
			<header>
				{
					/* <Navbar
					expand="lg"
					className="bg-body-tertiary sideNav"
					style={{ width: "10%", paddingTop: "5%" }}
				>
					<Container>

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
				</Navbar> */
					<nav className="sideNav">
						<img className="logo" src="/logo-transparent-svg.svg"></img>
						<ul className="navList">
							<li className="navItem">
								<Link to="/" className="navLink">
									Home
								</Link>
							</li>
							<li className="navItem">
								<Link to="/movies" className="navLink">
									Movies
								</Link>
							</li>
							<li className="navItem">
								<Link to="/tvseries" className="navLink">
									Tv Shows
								</Link>
							</li>
							<li className="navItem">
								<Link to="/search" className="navLink">
									Search
								</Link>
							</li>
						</ul>
					</nav>
				}
			</header>
			<div>
				<h1>Endless Movie Fun!</h1>
			</div>
			{props.children}
			<footer>
				<p>Powered by TMDb</p>
			</footer>
		</>
	);
}
