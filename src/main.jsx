import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Movies from "./pages/movies";
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
		path: "/tv",
		element: <Index />,
	},
	{
		path: "/search",
		element: <Index />,
	},
	{
		path: "/title",
		element: <Index />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
