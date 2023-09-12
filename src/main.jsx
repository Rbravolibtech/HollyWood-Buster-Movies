import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Movies from "./pages/movies";
import TvSeries from "./pages/tvseries";
import Search from "./pages/search";
import Title from "./pages/title";
import Layout from "./components/layout";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<Index />
			</Layout>
		),
	},
	{
		path: "/movies",
		element: (
			<Layout>
				<Movies />
			</Layout>
		),
	},
	{
		path: "/tvseries",
		element: (
			<Layout>
				<TvSeries />
			</Layout>
		),
	},
	{
		path: "/search",
		element: (
			<Layout>
				<Search />
			</Layout>
		),
	},
	{
		path: "/title",
		element: (
			<Layout>
				<Title />
			</Layout>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
