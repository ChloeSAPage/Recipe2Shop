import Root from "./layout/Root/Root";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Recipes from "./views/Recipes/Recipes";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "recipes",
                element: <Recipes />,
            },
        ],
    },
];

export default routes;
