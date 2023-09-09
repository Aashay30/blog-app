import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const currentUser = true;
  return (
    <>
      <div className="nav">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                {currentUser && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {currentUser ? (
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuPBb2U4Fvm1QxIGTstjguI0rRXYJx5dTRA&usqp=CAU"
              alt="profile-pic"
            />
          ) : (
            <>
              <ul className="topList">
                <li className="topListItem">
                  <Link to="/login" className="link">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link to="/register" className="link">
                    REGISTER
                  </Link>
                </li>
              </ul>
            </>
          )}
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
