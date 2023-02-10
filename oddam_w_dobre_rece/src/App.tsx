import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./components/Main/Home/Home";
import Login from "./components/Main/Login/Login";
import Main from "./components/Main/Main";
import Registration from "./components/Main/Registration/Registration";
import Logout from "./components/Main/Logout/Logout";
import Things from "./components/Things/Things";
import FirebaseAuth from "./FirebaseAuth";


function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <FirebaseAuth/>,
            children: [

                {
                    path:"/",
                    element: <Main/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                        {
                            path: "logowanie",
                            element: <Login/>
                        },
                        {
                            path: "rejestracja",
                            element: <Registration/>
                        },
                        {
                            path:"wylogowano",
                            element: <Logout/>
                        }
                    ]
                },
                {
                    path:'oddaj-rzeczy',
                    element: <Things/>
                }
            ]
        }
    ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
