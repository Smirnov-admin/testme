import './SignUp.css'

function SignUp() {

  return (
    <>
        <section className='signUp_section'>
            <div className="signUp_item">
                <a href="" className='signUp_btnBackHome'>Back to home</a>
                <h1 className="signUp_title">Sign Up</h1>
                <div className="signUp_authorizationForm_item">
                    <div className="authorization_item">
                        <label className='signUp_authorization_label_title'> Name</label>
                        <input type="text" className='signUp_authorization_input_text' placeholder='Your name'/>
                    </div>
                    <div className="authorization_item">
                        <label className='signUp_authorization_label_title'> Email </label>
                        <input type="text" className='signUp_authorization_input_text' placeholder='Your email'/>
                    </div>
                    <div className="authorization_item">
                        <label className='signUp_authorization_label_title'> Password </label>
                        <input type="text" className='signUp_authorization_input_text' placeholder='Your password'/>
                    </div>
                    <div className="authorization_item">
                        <label className='signUp_authorization_label_title'> Confirm password </label>
                        <input type="text" className='signUp_authorization_input_text' placeholder='Confirm password'/>
                    </div>
                    <div className='signUp_authorization_account'>
                        <button className='signUp_authorazation_btnSignUp'> Sign Up </button>
                        <div className='signUp_authorization_newAccount'>
                            <p className='signUp_authorization_newAccount_text'> Already have an account</p>
                            <a href="" className='signUp_authorazation_btnSignIn'>Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp