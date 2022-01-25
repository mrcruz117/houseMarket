import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">
          <button className="logOut" onClick={onLogout}>
            Logout
          </button>
        </p>
      </header>
    </div>
  );
}

export default Profile;
