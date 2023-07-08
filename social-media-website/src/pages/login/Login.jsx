import "./login.scss"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia a, accusamus voluptatum ut ducimus sapiente illo fugit quibusdam unde consequatur culpa! Nobis blanditiis voluptatem deserunt eius ipsam est facere aliquid praesentium.
                    </p>
                    <span>
                        Don't you have an accont?
                    </span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="password"></input>
                        <button>Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login