import { Grid } from "@material-ui/core";
import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <img
            className="image"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />
          <img
            className="kodee"
            src="https://www.nvcs.co.uk/wp-content/uploads/Twitter_logo_bird_transparent_png-768x624.png"
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <img
            className="logo"
            src="https://th.bing.com/th/id/R.775de233917fcabd4c3101f0a69326df?rik=PXV92Tx0x%2fiFiw&riu=http%3a%2f%2fsocialbarrel.com%2fwp-content%2fuploads%2f2018%2f12%2fTwitter.png&ehk=szF0EN%2fjDWbFmrvVlQq%2blbkgKe657jCmNi0Qtzv94OI%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />

          <div>
            <h1 className="now">Happening now</h1>
            <h1 className="join">Join Twitter today.</h1>
            <div className="buttons">
              <button className="button">
                <img
                  className="google_icon"
                  src="https://s4827.pcdn.co/wp-content/uploads/2018/04/Google-logo-2015-G-icon.png"
                  alt=""
                />
                Sign Up with Google
              </button>
              <button className="button">
                <img
                  className="apple_icon"
                  src="https://th.bing.com/th/id/R.40929980041d1d036cfbfadf0522a1a4?rik=XWOw8FcFk698xg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fApple-Logo-Transparent-PNG.png&ehk=Lmu%2bslhJGUR1bduZ1aGCOWa1BQHy0zN37onFnIlnbfc%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                Sign Up with Apple
              </button>
              <div className="OR">
                <div className="lines"></div>
                OR
                <div className="lines"></div>
              </div>
              <button className="signup">Sign Up with Phone or Email</button>
            </div>
            <div className="desc">
              By signing up, you agree to the{" "}
              <span className="terms">Terms of Service</span> and
              <span className="terms"> Privacy Policy,</span> including
              <span className="terms"> Cookie Use.</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
