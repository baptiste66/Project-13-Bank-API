import { Link } from "react-router-dom";


export default function ButtonSignIn(){
    return(
        <nav className="main-nav">
            <Link className="main-nav-item" to="/signin">
                <i className="fa fa-sign-out"></i>
                Sign in
            </Link>
        </nav>
    )
}