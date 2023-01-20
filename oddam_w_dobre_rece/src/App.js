import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Dashboard/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "logowanie",
                    element: <LoginPage/>
                }
            ]
        }
    ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
