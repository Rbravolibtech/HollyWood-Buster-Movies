import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
	return (
		<>
			<header>
				<nav className="sideNav">
					<img className="logo" src="/logo-transparent-svg.svg"></img>
					<ul className="navList">
						<div>
							<Link to="/" className="navLink">
								Home
							</Link>
						</div>
						<div>
							<Link to="/movies" className="navLink">
								Movies
							</Link>
						</div>
						<div>
							<Link to="/tvseries" className="navLink">
								Tv Shows
							</Link>
						</div>
						<div>
							<Link to="/search" className="navLink">
								Search
							</Link>
						</div>
					</ul>
				</nav>
			</header>
			<div className="slogan">
				<h1>Hollywood<span style={{ color: '#f89c2a' }}>Buster</span></h1>
			</div >
			{props.children}
			< footer className="footer" >
				<p>Powered by TMDb</p>
			</footer >
		</>
	);
}
