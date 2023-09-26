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
			<div className="slogan" id="slogan">
				<div>
					<h1>
						Hollywood
					</h1>
				</div>
				<div className="buster">
					<h1>
						<span style={{ color: "#f89c2a" }}>Buster</span>
					</h1>
					<img className="glass" src="/broken-glass-200.png" alt="broken glass overlay" />
				</div>
			</div>
			<div>{props.children}</div>
			<footer className="footer">
				<p>Powered by TMDb</p>
			</footer>
		</>
	);
}
