
import { logout } from '../../redux/reducers/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
export default function ButtonLoggedOut(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { firstName } = useSelector((state) => state.getinfo);
    const handleLogout = (e) =>{
        e.preventDefault();

        dispatch(logout());
        navigate('/')
    }
    return(
        <nav className="main-nav">
      <Link to="/user" className="main-nav-item name">
                <i className="fa fa-user-circle"></i>
                {firstName}
            </Link>
            <a className="main-nav-item" href="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </a>

            
            
        </nav>
    )
}