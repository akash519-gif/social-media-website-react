import LeftBar from "./components/leftbar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from '../src/pages/home/Home'
import Profile from '../src/pages/profile/Profile'
import "./style.scss"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
    const {currentUser} = useContext(AuthContext)
    const {darkMode} = useContext(DarkModeContext)
    const Layout = () =>{
      return(
        <div className={`theme-${darkMode ? "dark":"light"}`}>
          <NavBar/>
          <div style={{display: 'flex'}}>
            <LeftBar/>
            <div style={{ flex: 7}}><Outlet/></div>
            <RightBar/>
          </div>
        </div>
      )
    }

    const ProtectedRoute = ({children}) =>{
      if(!currentUser){
        return <Navigate to='/login'/>
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
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
