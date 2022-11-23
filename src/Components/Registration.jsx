/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
const initialValues = {
  
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

// const registrationSchema = Yup.object().shape({
//   firstname: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('First name is required'),
//   email: Yup.string()
//     .email('Wrong email format')
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Email is required'),
//   lastname: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Last name is required'),
//   password: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password is required'),
//   changepassword: Yup.string()
//     .required('Password confirmation is required')
//     .when('password', {
//       is: (val: string) => (val && val.length > 0 ? true : false),
//       then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
//     }),
//   acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
// })

export default function Registration() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    const data_t = {
      // title: 'drink water',
      // body: 'I should drink water',
      // userId: 3,
      // "userAccount":e.target[1].value,
      // "password":e.target[3].value,
      // "password2":e.target[3].value,
      // "username":e.target[0].value,
      // "realName":e.target[0].value,
      // "phone":"01082933060",
      // "email":e.target[2].value,
      // //"email":"jack.bitlworks",
      // "birthYear":"1999",
      // "birthMonth":"05",
      // "birthDay":"01",
      // "gender":"M",
      // "nickname":"jack",
      // "school":"한국항공대학교",
      // "grade":"중1"

      username: "test12345",
      password: "BhOCSZismIs#kNW5l",
      password2: "0tZA^v8tpz1Vo",
      realName: "홍길동",
      phone: "010-0000-0000",
      email: "jack.bitlworks@gmail.com",
      birthYear: 2022,
      birthMonth: 10,
      birthDay: 1,
      gender: "없음",
    };
    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);
    // const formData = new FormData();
    // formData.append("photo", files.length && files[0].uploadedFile);
    // formData.append("comment", commentValue);
    // formData.append("content_id", classData.content_id);

    axios
      .post("https://farm01.bitlworks.co.kr/api/v1/auth/signup", data_t, config)
      .then((response) => {
        console.log("성공");
        console.log(response.status);
        console.log(response.data);
      })
      // .catch((e) => console.log('something went wrong :(', e));
      .catch((error) => {
        console.log("re:", error.message);
        console.log("re:", error.body);
        console.log("re:", error.config);
        console.log("re:", error.requests);
        console.log("re:", error.response.data);
      });
    // setCommentValue("");
  };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: registrationSchema,
  //   onSubmit: async (values, {setStatus, setSubmitting}) => {

  //     setLoading(true)
  //     try {

  //       const {data: auth} = await register(
  //         values.email,
  //         values.firstname,
  //         values.lastname,
  //         values.password,
  //         values.changepassword
  //       )
  //       // console.log("data:",values.email);
  //       saveAuth(auth)
  //       //handleSubmit()
  //       console.log("asd2");

  //       const {data: user} = await getUserByToken(auth.api_token)
  //       setCurrentUser(user)

  //     } catch (error) {
  //       console.error(error)
  //       saveAuth(undefined)
  //       setStatus('The registration details is incorrect')
  //       setSubmitting(false)
  //       setLoading(false)
  //     }
  //   },
  // })

  // useEffect(() => {
  //   PasswordMeterComponent.bootstrap()
  // }, [])

  return (
    <div id="root" className="root">
      <div className="d-flex  flex-lg-row flex-column-fluid h-100">
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 left_side">
          <div className="d-flex flex-center flex-column flex-lg-row-fluid ">
            <div className="w-lg-500px p-10">
              <form
                className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                noValidate
                id="kt_login_signup_form"
                onSubmit={handleSubmit}
              >
                {/* begin::Heading */}
                <div className="text-center mb-11">
                  {/* begin::Title */}
                  <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                  {/* end::Title */}

                  <div className="text-gray-500 fw-semibold fs-6">
                    Your Social Campaigns
                  </div>
                </div>
                {/* end::Heading */}

                {/* begin::Login options */}
                <div className="row g-3 mb-9">
                  {/* begin::Col */}
                  <div className="col-md-6">
                    {/* begin::Google link */}
                    <a
                      href="#"
                      className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                    >
                      <img
                        alt="Logo"
                        // src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                        className="h-15px me-3"
                      />
                      Sign in with Google
                    </a>
                    {/* end::Google link */}
                  </div>
                  {/* end::Col */}

                  {/* begin::Col */}
                  <div className="col-md-6">
                    {/* begin::Google link */}
                    <a
                      href="#"
                      className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                    >
                      <img
                        alt="Logo"
                        // src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                        className="theme-light-show h-15px me-3"
                      />
                      <img
                        alt="Logo"
                        // src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                        className="theme-dark-show h-15px me-3"
                      />
                      Sign in with Apple
                    </a>
                    {/* end::Google link */}
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Login options */}

                <div className="separator separator-content my-14">
                  <span className="w-125px text-gray-500 fw-semibold fs-7">
                    Or with email
                  </span>
                </div>

                {/* {formik.status && ( */}
                <div className="mb-lg-15 alert alert-danger">
                  <div className="alert-text font-weight-bold"></div>
                </div>
                {/* )} */}

                {/* begin::Form group Firstname */}
                <div className="fv-row mb-8">
                  <label className="form-label fw-bolder text-dark fs-6">
                    userName
                  </label>
                  <input
                    placeholder="userName"
                    type="text"
                    autoComplete="off"
                    className="form-control bg-transparent"
                  />
                  {/* {formik.touched.firstname && formik.errors.firstname && ( */}
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert"></span>
                    </div>
                  </div>
                  {/* )} */}
                </div>
                {/* end::Form group */}
                <div className="fv-row mb-8">
                  {/* begin::Form group Lastname */}
                  <label className="form-label fw-bolder text-dark fs-6">
                    userAccount{" "}
                  </label>
                  <input
                    placeholder="userAccount"
                    type="text"
                    autoComplete="off"
                    className="form-control bg-transparent"
                  />

                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert"></span>
                    </div>
                  </div>

                  {/* end::Form group */}
                </div>

                {/* begin::Form group Email */}
                <div className="fv-row mb-8">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    type="email"
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

                {/* begin::Form group Password */}
                <div className="fv-row mb-8" data-kt-password-meter="true">
                  <div className="mb-1">
                    <label className="form-label fw-bolder text-dark fs-6">
                      Password
                    </label>
                    <div className="position-relative mb-3">
                      <input
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        className="form-control bg-transparent"
                      />

                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert"></span>
                        </div>
                      </div>
                    </div>
                    {/* begin::Meter */}
                    <div
                      className="d-flex align-items-center mb-3"
                      data-kt-password-meter-control="highlight"
                    >
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                    </div>
                    {/* end::Meter */}
                  </div>
                  <div className="text-muted">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </div>
                </div>
                {/* end::Form group */}

                {/* begin::Form group Confirm password */}
                <div className="fv-row mb-5">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password confirmation"
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

                {/* begin::Form group */}
                <div className="fv-row mb-8">
                  <label
                    className="form-check form-check-inline"
                    htmlFor="kt_login_toc_agree"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="kt_login_toc_agree"
                    />
                    <span>
                      I Accept the{" "}
                      <a
                        href="https://keenthemes.com/metronic/?page=faq"
                        target="_blank"
                        className="ms-1 link-primary"
                      >
                        Terms
                      </a>
                      .
                    </span>
                  </label>

                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert"></span>
                    </div>
                  </div>
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className="text-center">
                  <button
                    type="submit"
                    id="kt_sign_up_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                  >
                    {!loading && (
                      <span className="indicator-label">Submit</span>
                    )}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                  <Link to="/login">
                    <button
                      type="button"
                      id="kt_login_signup_form_cancel_button"
                      className="btn btn-lg btn-light-primary w-100 mb-5"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
                {/* end::Form group */}
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2 right_side">
          <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100"></div>
        </div>
      </div>
    </div>
  );
}
