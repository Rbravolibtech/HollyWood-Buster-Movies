import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Movies from "./pages/movies";
import TvSeries from "./pages/tvseries";
import Search from "./pages/search";
import Title from "./pages/title";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/movies",
		element: <Movies />,
	},
	{
		path: "/tvseries",
		element: <TvSeries />,
	},
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "/title",
		element: <Title />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
