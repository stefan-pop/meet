import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {

    return props.showWelcomeScreen ? (

        <div className="WelcomeScreen">
            <div className="content">
                <h1>Welcome to Meet App</h1>
                <br />
                <h4>
                    Check out upcoming events around the world for
                    full-stack
                    developers
                </h4>

                <div className="button_cont" align="center">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google sign-in"
                            />
                            <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" className="btn-text">
                                <b>Sign in with google</b>
                            </button>
                        </div>
                </div>

                <a href="https://stefan-pop.github.io/meet/privacy.html" rel="nofollow noopener">Privacy policy</a>
            </div>
        </div>      
    ) : null ;
}

export default WelcomeScreen;