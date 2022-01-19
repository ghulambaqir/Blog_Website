import { Link } from 'react-router-dom';
import './NavBar.css';
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function NavBar() {
    const { user, dispatch } = useContext(Context);


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    
    return (
        <div className='nav'>
            <div className="left">
                <i className=" leftIcon fab fa-facebook"></i>
                <i className=" leftIcon fab fa-instagram"></i>
                <i className=" leftIcon fab fa-twitter-square"></i>
            </div>
            <div className="center">
                <ul className="list">
                    <li className="listItem">
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className="listItem">
                    <Link className='link' to="/Write">WRITE</Link>
                    </li>
                    <li className="listItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="right">
                {
                    user ?(
                        
                        <img className="image" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

                    ) : (
                        <ul className="list">
                             <li className="listItem">
                              <Link className='link' to="/login">LOGIN</Link>
                              </li>
                              <li className="listItem">
                               <Link className='link' to="/register">REGISTER</Link>
                               </li>
                        </ul>
                    )
                }
               
                <i className=" searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

