import './Success.css'

function Success() {

  return (
    <>
        <section className='success_section'>
            <div className="success_item">
                <a href="" className='success_btnBackHome'>Back to home</a>
                <h1 className="success_title">Success</h1>
                <div className="success_authorizationForm_item">
                    <div className="success_authorization_item">
                        <h2 className='success_authorization_title'>Login successful</h2>
                        <p className='success_authorization_text'>You can now log in your personal account</p>
                        <button className='success_authorazation_btnGoHome'>Go to home</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Success