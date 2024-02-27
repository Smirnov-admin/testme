import './SignIn.css'

interface SignInProps {
    setIsSignIn: (SignUp: boolean) => void;
}

function SignIn({setIsSignIn}:SignInProps) {

  const handleClick = () => {
    setIsSignIn(true);
  }  

  return (
    <>
        <section className='signIn_section'>
            <div className="signIn_item">
                <a href="" className='signIn_btnBackHome'>Back to home</a>
                <h1 className="signIn_title">Sign In</h1>
                <div className="signIn_authorizationForm_item">
                    <div className="authorization_item">
                        <label className='signIn_authorization_label_title'> Email <span>*</span></label>
                        <input type="text" className='signIn_authorization_input_text' placeholder='Your email'/>
                    </div>
                    <div className="authorization_item">
                        <label className='signIn_authorization_label_title'> Password </label>
                        <input type="password" className='signIn_authorization_input_text' placeholder='Your password' />
                        <a href="" className='signIn_BtnForgotPassword'> Forgot password? </a>
                    </div>
                    <div className='signIn_authorization_account'>
                        <button onClick={handleClick} className='signIn_authorazation_btnSignIn'> Sign In </button>
                        <div className='signIn_authorization_newAccount'>
                            <p className='signIn_authorization_newAccount_text'> Don't have an account?</p>
                            <a href="" className='signIn_authorazation_btnSignUp'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn