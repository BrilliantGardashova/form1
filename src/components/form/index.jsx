import "./style.css";
import {useState} from "react";
import icon_email from "./assets/email.svg"
import icon_password from "./assets/Lock (1).svg"
import signin from "./assets/user.signin.svg"
import x from "./assets/x (2).svg"
import google from "./assets/google.svg"
import twitter from "./assets/twitter.svg"
import profile from "./assets/Profile.svg"
import { validate } from "./helpers";
// import check from "./assets/check.svg"



export default function Form(){
  const [profileDatas, setProfileDatas] = useState({
    userName: '',
    email: '',
    password: '',
    checkbox: '',
    formTitle: "Sign In",
    mode: "signin"
  })
 
  const switchMode = () => {
    setProfileDatas(prevState => ({
      ...prevState,
      userName: '',
      password: '',
      checkbox: '',
      mode: prevState.mode === "signin" ? "signup" : "signin",
      formTitle: prevState.mode === "signin" ? "Sign Up" : "Sign In"
    }));
  };



  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    ageRange: "",
    terms: true,
  });
   
  const handleChange = (e) => {
    e.preventDefault()
    const { name, type, checked, value } = e.target;

    setProfileDatas({
      ...profileDatas,
      [name]: type === 'checkbox' ? checked : value
    })

    const error = validate(name, value)

    setErrors({
      ...errors,
      [name]: error
    })
console.log(profileDatas)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      profileDatas.userName.length > 0 &&
      profileDatas.email.length > 0 &&
      profileDatas.password.length > 0 &&
      profileDatas.checkbox.length > 0
    ) {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }

  }
  

      return (
          <form className="container" onSubmit={handleSubmit}> 
            <div className="form_header">
              <div className="header_top">
                <div className="header_title">
                  <div className="header_img">
                    <img src = {signin} alt="user icon"/>
                  </div>
                  <h1 className="tittle_text">{profileDatas.formTitle}</h1>
                </div>
                <div className="header_x">
                  <img src={x} alt="x icon" />
                </div>
              </div>
              {profileDatas.mode === "signup" ?(
                <p>
                  Register to Mamba - enjoy exclusive
                  <br />
                  features & many more
                </p>
                ) : (
                  <p>
                    Login to your account - enjoy exclusive
                   <br />
                   features & many more                   
                  </p>
                )}
            </div>


            <div className="form_body">
              {profileDatas.mode === "signup" && (
                <div className="input">
                <label htmlFor="username">
                  Full name<sup>*</sup>
                </label>
                <div className="username">
                  <div className="icon icon__username">
                    <img src={profile} alt="" />
                  </div>
                  <input
                    id="username"
                    className="username__input"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    name="username"
                    value={profileDatas.userName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              )}

       <div className="input">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
          <div className="email">
            <div className="icon icon__email">
              <img src={icon_email} alt="" />
            </div>
            <input
              id="email"
              className="email__input"
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={profileDatas.email}
              onChange={handleChange}
            />
          </div>
        </div>
            
        <div className="input">
          <label htmlFor="password">
            Password<sup>*</sup>
          </label>
          <div className="password">
            <div className="icon icon__password">
              <img src={icon_password} alt="" />
            </div>
            <input
              id="password"
              className="password__input"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={profileDatas.password}
              onChange={handleChange}
            />
          </div>
          
         </div>
          
               <div className="remeber__me">
               <div className="remeber__checkbox">
                 <input
                   type="checkbox"
                   required
                   name="checkbox"
                   checked={profileDatas.checkbox}
                   onChange={handleChange}
                 />

                  <label htmlFor="remeberme">
                  {profileDatas.mode === "signup" ? (
                    <>
                      I agree to <a href="#">Terms & Conditions</a>
                    </>
                    ) : (
                    <>Remember me</>
                    )}
                  </label>
                  </div>
                  {profileDatas.mode !== "signup" && <a href="#">Forget Password?</a>}
                  </div>
              </div>
      
              <div className="form__footer">
        <div className="authentication">
          <button
            // disabled={!inputActive}
            className="submit filled"
            type="submit"
          >
            {profileDatas.formTitle}
          </button>
          <div className="form__control">
            <p>
              {profileDatas.mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <span className="switchMode" onClick={switchMode}>
                    Sign in
                  </span>
                </>
              ) : (
                <>
                  {/* Don&apos;t have an account?{" "} */}
                  <span className="switchMode" onClick={switchMode}>
                    Sign up
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="authentication or">
          <div className="line"></div>
          <p className="or__text">OR</p>
          <div className="line"></div>
        </div>

        <div className="authentication">
          <button className="auth__button" type="submit">
            <img className="auth" src={google} alt="Google icon" />
            Google
          </button>
          <button className="auth__button" type="submit">
            <img className="auth" src={twitter} alt="Twitter icon" />
            Twitter
          </button>
        </div>
      </div>
  
  </form>
  );
}
  