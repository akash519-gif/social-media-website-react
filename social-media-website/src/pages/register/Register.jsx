import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Name"></input>
            <input type="password" placeholder="password"></input>
            <input type="email" placeholder="Email"></input>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia a, accusamus voluptatum ut ducimus sapiente illo fugit
            quibusdam unde consequatur culpa! Nobis blanditiis voluptatem
            deserunt eius ipsam est facere aliquid praesentium.
          </p>
          <span>Do you have an accont?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
