import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
        },
        {
            path: "logowanie",
            element: <Login/>
        }
    ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
