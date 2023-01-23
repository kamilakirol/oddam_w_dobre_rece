import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LogOutPage from "./components/LogOutPage/LogOutPage";

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
                },
                {
                    path: "rejestracja",
                    element: <RegistrationPage/>
                },
                {
                    path:"wylogowano",
                    element: <LogOutPage/>
                }
            ]
        }
    ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
