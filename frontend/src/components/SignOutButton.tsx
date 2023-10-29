import { MouseEventHandler } from 'react';
import './signOutButton.css';

type prop={
    accountId:string,
    onClick:MouseEventHandler
}
function SignOutButton({onClick=()=>{},accountId}:prop):JSX.Element {
  return (
    <button className='sign_out_btn' onClick={onClick}>{accountId}</button>
  )
}

export default SignOutButton;