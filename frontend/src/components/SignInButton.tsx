import './signInButton.css';

function SignInButton({onClick=()=>{}}):JSX.Element {
  return (
    <button className='sign_in_btn' onClick={onClick}>Sign In</button>
  )
}

export default SignInButton;