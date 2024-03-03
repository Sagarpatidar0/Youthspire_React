import React from 'react'
import './Login.css'
function Login() {
  return (
   <>
     <div className="container">
        <div className="header">
            <img src="./Images/title/6-removebg-preview (1).png"/>
            <h1>WELCOME TO YOUTHSPIRE</h1>
        </div>
        <div className="form-container">
            <div className="box">
            <form action="#">
                <div className="input-group">
                    
                    <input type="text" id="username" name="username" placeholder="Phone number, username or email"  required />
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit">Log in</button>
            </form>
                <div className="button-group">
                    <a className="Google" href="#">Log in with Google</a>
                    <a  className="x"   href="#">Log in with X</a>
                    <a className="Facebook" href="#">Log in with Facebook</a>
                </div>
          
            </div>
                <div className="links">
                    <a href="#">Forgot password?</a>
                    <a href="#">Don't have an account? Sign up</a>
                </div>
        </div>
        <div className="footer">
        <img src="./Images/title/6-removebg-preview (1).png"  />
            <img src="./Images/title/7-removebg-preview (1).png"  />
            <img src="./Images/title/8-removebg-preview (1).png"  />
            <img src="./Images/title/9-removebg-preview (1).png"  />
            <img src="./Images/title/10-removebg-preview (1).png"  />
            <img src="./Images/title/11-removebg-preview (1).png"  />
            <img src="./Images/title/12-removebg-preview (1).png"  />
            <img src="./Images/title/13-removebg-preview (1).png"  />
            <img src="./Images/title/14-removebg-preview (1).png"  />
            <img src="./Images/title/15-removebg-preview (1).png"  />
           </div>
    </div>

   </>
  )
}

export default Login