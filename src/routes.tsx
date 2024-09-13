import Root from "./layout/Root/Root";
import Home from "./views/Home/Home";
import About from "./views/About/About";

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
        ],
    },
];

export default routes;
