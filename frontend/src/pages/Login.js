import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { context } from "../context/globalContext";
import { handleAdminLogin } from "../api/admin-auth";
import Div100vh from "react-div-100vh";

//https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537%20
//https://ui.dev/react-router-v5-protected-routes-authentication/

// https://stackabuse.com/handling-authentication-in-express-js/
// https://stackabuse.com/implementing-user-authentication-the-right-way/

const Login = () => {
  const { login } = useContext(context);
  const [email, setEmail] = useState("admin1@email.com");
  const [password, setPassword] = useState("testingadmin1");
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  useEffect(() => {
    document.title = "Login - Coach Chris";
  }, []);

  // useEffect(() => {
  //   console.log("checking for authed user");
  //   checkAuthedUser().then((res) => {
  //     if (res.status === 200) {
  //       history.replace("/dashboard");
  //     }
  //   });

  //   console.log("checked");
  // });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const checkLoginStatus = await handleAdminLogin(email, password);

    const { data } = checkLoginStatus;

    if (data !== null) {
      login(data);
      history.replace("/dashboard");
    }
  };

  return (
    <Div100vh className="bg-dark">
      <main className="container">
        {/* <h1 className="text-white text-center pt-5">Coach Chris Training</h1> */}
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
                    value={email}
                    className="form-control rounded-pill text-left"
                    id="login-email"
                    placeholder="Enter your email.."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="login-password" className="form-label mt-3">
                    Password:
                  </label>
                  <input
                    value={password}
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

          <div className="mt-3 text-center">
            {loading ? (
              <div
                className="spinner-border text-danger text-center mx-auto my-2"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                className="my-2 rounded-pill btn btn-outline-primary px-5"
                onClick={(e) => handleLogin(e)}
              >
                {" "}
                Login{" "}
              </button>
            )}
          </div>
        </div>
      </main>
    </Div100vh>
  );
};

export default Login;
