import LeftBar from "./components/leftbar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from '../src/pages/home/Home'
import Profile from '../src/pages/profile/Profile'

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const currentUser = false;

const Layout = () =>{
  return(
    <div>
      <NavBar/>
      <div>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
      </div>
    </div>
  )
}

const ProtectedRoute = ({children}) =>{
  if(!currentUser){
    return Navigate("/login")
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute>
                <Layout/>
              </ProtectedRoute>),
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
