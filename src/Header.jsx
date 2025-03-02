import React, { useState, useEffect } from "react";
import Image from "./assets/images/freshworks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { signInWithGoogle, logout, auth } from "./fireBase";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const [showAside, setShowAside] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <section>
      {/* Header Section */}
      <section className="header-section">
        <div className="logo-section" style={{ display: "flex" }}>
          <img src={Image} style={{ height: "30px", width: "30px" }} />
          <h2>FreshSpeak</h2>
        </div>
        <div>
          <nav>
            <button className="user-icon" onClick={() => setShowAside(!showAside)}>
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User" className="profile-img" />
              ) : (
                <FontAwesomeIcon icon={faCircleUser} size="2x" />
              )}
            </button>
          </nav>
        </div>
      </section>

      {/* Left-Side Aside Section */}
      <aside className={`left-aside ${showAside ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setShowAside(false)}>✖</button>

        {user ? (
          <div className="user-profile">
            <img src={user.photoURL} alt="User Profile" className="profile-img-large" />
            <p className="user-name">{user.displayName || "User"}</p>
            <p className="user-email">{user.email}</p>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={() => setActiveForm("signup")}>Sign Up</button>
            <button onClick={() => setActiveForm("login")}>Login</button>
          </div>
        )}
      </aside>

      {/* Popup Modal for Signup/Login */}
      {activeForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveForm(null)}>✖</button>
            {activeForm === "signup" ? (
              <>
                <h2>Signup</h2>
                <form>
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Sign Up</button>
                </form>
                <button className="google-btn" onClick={signInWithGoogle}>
                  Sign up with Google
                </button>
                <p>Already have an account <span onClick={() => setActiveForm("login")}>Login</span></p>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <form>
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Login</button>
                </form>
                <button className="google-btn" onClick={signInWithGoogle}>
                  Sign in with Google
                </button>
                <p>Don't have an account? <span onClick={() => setActiveForm("signup")}>Sign up</span></p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Header;
