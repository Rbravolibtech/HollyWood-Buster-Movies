export default function Layout(props) {
	return (
		<div>
			<header></header>
			{props.children}
			<footer></footer>
		</div>
	);
}
