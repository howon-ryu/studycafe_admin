import { React, useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
// import "./main.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import "../css/style.bundle.css";
const Login = (props) => {
  const move = useRef();
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["default"]);
  useEffect(() => {
    console.log(props);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    const data_t = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);
    // if (e.target[0].value=="admin"&& e.target[1].value=="admin"){
    //   // props.setLoginFlag(true);
    //   //move.current.click();
    //   window.location.replace("/main");
    // }else{
    //   alert("아이디와 비밀번호를 다시 확인하세요!");
    // }
    let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
    let posturl_set = posturl + "auth" + "/" + "login";
    console.log("posturl:", posturl_set);
    // setTimeout(console.log("puturl:", posturl_set), 30000);

    axios
      .post(posturl_set, data_t, config)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setCookie("cookie", response.data);
        window.location.replace("/Office__head_office");
      })
      // .catch((e) => console.log('something went wrong :(', e));
      .catch((error) => {
        alert("아이디와 비밀번호를 다시 확인하세요");
        console.log("re:", error.message);
        console.log("re:", error.body);
        console.log("re:", error.config);
        console.log("re:", error.requests);
        console.log("re:", error.response.data);
      });
  };
  return (
    <div id="root" className="root">
      <div className="d-flex  flex-lg-row flex-column-fluid h-100">
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 left_side">
          <div className="d-flex flex-center flex-column flex-lg-row-fluid ">
            <div className="w-lg-500px p-10">
              <form
                className="form w-100"
                onSubmit={handleSubmit}
                noValidate
                id="kt_login_signin_form"
              >
                {/* begin::Heading */}
                <div className="text-center mb-11">
                  <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  <div className="text-gray-500 fw-semibold fs-6">
                    {/* Your Social Campaigns */}
                  </div>
                </div>
                {/* begin::Heading */}

                {/* begin::Login options */}

                {/* end::Login options */}

                {/* begin::Separator */}

                {/* end::Separator */}

                {/* {formik.status ? (
          <div className="mb-lg-15 alert alert-danger">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-10 bg-light-info p-8 rounded">
            <div className="text-info">
              Use account <strong>admin@demo.com</strong> and password{" "}
              <strong>demo</strong> to continue.
            </div>
          </div>
        )} */}

                {/* begin::Form group */}
                <div className="fv-row mb-8">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    id
                  </label>
                  <br />
                  <input
                    placeholder="id"
                    className="form-control bg-transparent"
                    type="id"
                    name="id"
                    autoComplete="off"
                  />

                  <div className="fv-plugins-message-container">
                    <span role="alert"></span>
                  </div>
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className="fv-row mb-3">
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="password"
                    autoComplete="off"
                    className="form-control bg-transparent"
                  />

                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert"></span>
                    </div>
                  </div>
                </div>
                {/* end::Form group */}

                {/* begin::Wrapper */}
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                  <div />

                  {/* begin::Link */}
                  {/* <Link to="/auth/forgot-password" className="link-primary">
                    Forgot Password ?
                  </Link> */}
                  {/* end::Link */}
                </div>
                {/* end::Wrapper */}

                {/* begin::Action */}
                <div className="d-grid mb-10">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-primary"
                  >
                    {!loading && (
                      <span className="indicator-label">Continue</span>
                    )}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
                {/* end::Action */}

                {/* <div className="text-gray-500 text-center fw-semibold fs-6">
                  Not a Member yet?{" "}
                  <Link to="/registration" className="link-primary">
                    Sign up
                  </Link>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2 right_side">
          <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100"></div>
        </div>
      </div>
      <Link to="/main" hidden>
        <span ref={move}></span>
      </Link>
    </div>
  );
};

export default Login;
