import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537%20
//https://ui.dev/react-router-v5-protected-routes-authentication/

const Login = ({ fakeAuth }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(" ");

  useEffect(() => {
    document.title = "Login - Coach Chris";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginError("Please correctly fill out form");
      return 0;
    }
    const loginInfo = {
      email,
      password,
    };

    console.log(loginInfo);
  };

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page">
      <main className="container">
        <h1 className="gradient-text text-center mt-5">Coach Chris Training</h1>
        <div className="col-sm-7 col-md-5 p-4 mt-5 login-card border rounded mx-auto shadow-sm bg-light">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
            >
              <div className="mb-3">
                <form onSubmit={handleLogin}>
                  <label htmlFor="login-email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="type"
                    className="form-control rounded-pill text-left"
                    id="login-email"
                    placeholder="Enter your email.."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="login-password" className="form-label mt-3">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    id="login-password"
                    placeholder="Enter password..."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>

          <small className="text-error small-text text-center">
            {loginError}
          </small>
          <div className="mt-3 text-center">
            <button
              className="my-2 rounded-pill btn btn-outline-primary px-5"
              onClick={(e) => handleLogin(e)}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </main>
      <footer className="fixed-bottom text-center">
        <small>API services served by the team from</small>
        <br />
        {/* <img className="tmdb-logo" src={tmdb} alt="The Movie Database logo" /> */}
      </footer>
    </div>
  );
};

export default Login;
