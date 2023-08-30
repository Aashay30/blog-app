import "./navbar.css";

export default function NavBar() {
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
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuPBb2U4Fvm1QxIGTstjguI0rRXYJx5dTRA&usqp=CAU"
            alt="profile-pic"
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
