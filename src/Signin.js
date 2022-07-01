import React from "react";
import { useDispatch } from "react-redux";
import img from "./assets/img.png";
import fb from "./assets/logo/fb.svg";
import google from "./assets/logo/google.png";
import Close from "./assets/logo/close.svg";
export default function Signin() {
  const dispatch = useDispatch();
  const signupHandler = () => {
    dispatch({ type: "updateSignStatus" });
  };
  const closeHandler = () => {
    dispatch({ type: "closeHandler" });
  };
  return (
    <div className="sign">
      <img src={Close} className="close-logo" onClick={closeHandler} />
      <div className="sign-con">
        <div className="sign-text">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="sign_box">
          <div className="sign_box-left">
            <h3 className="heading-tertiary">Sign In</h3>

            <input type="email" placeholder="Email" className="input-2" />
            <input type="password" placeholder="Password" className="input-2" />

            <div className="btn_con">
              <button type="" className="btn-signup">
                Sign In
              </button>
              <p className="btn_con-text" onClick={signupHandler}>
                or,sign up
              </p>
            </div>
            <button className="btn-other">
              <img src={fb} />
              <p className="btn-text">Sign up with facebook</p>
            </button>
            <button className="btn-other">
              <img src={google} />
              <p className="btn-text">Sign up with google</p>
            </button>
            <div className="text-box">
              <p className="left-text">Forgot Password?</p>
            </div>
          </div>
          <div className="sign_box-right">
            <div className="right-text-1">
              <p>
                Don’t have an account yet?{" "}
                <span className="right-text-1_span" onClick={signupHandler}>
                  Create new for free!
                </span>
              </p>
            </div>
            <div className="img-box">
              <img src={img} className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
