import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Dashboard/Home/Home";
import LoginPage from "./components/Dashboard/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegistrationPage from "./components/Dashboard/RegistrationPage/RegistrationPage";
import LogOutPage from "./components/Dashboard/LogOutPage/LogOutPage";
import GivePage from "./components/GivePage/GivePage";

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
        },
        {
            path:'oddaj-rzeczy',
            element: <GivePage/>
        }
    ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
