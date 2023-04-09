import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let ArrUsers :any = [];
  const navigate = useNavigate();
 const [checkL,setCheckL]=useState(true);

  const handleLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getUsers = window.localStorage.getItem("users");
    
        if(getUsers){
          ArrUsers = JSON.parse(getUsers);
        }

        for(let i=0;i<ArrUsers.length;i++){
          if(ArrUsers[i].email == email && ArrUsers[i].password == password){
            setCheckL(true)
            navigate("/Home");
              window.localStorage.setItem("LoggedUser",ArrUsers[i].email);
              window.location.reload();
              
          }

          if(i==ArrUsers.length-1){
          if(ArrUsers[i].email != email || ArrUsers[i].password != password){
              // console.log("makaynx l7sab");
              setCheckL(false)
              
          }
        }
           
        }
        
        
  }

  return (
    <div>
      <form className='form' onSubmit={handleLogin}>
        <div className={`${checkL ? "" : "alert alert-danger"}`}>{`${checkL ? "" : "Email Or Password Incorrect"}`}</div>
        <label>
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
}


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let data:any=[];
  let afterRf:any = [];

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let getUsers = window.localStorage.getItem("users");
    if(getUsers){
      afterRf = JSON.parse(getUsers);
    }
     const arrInfo  = {
        id: Math.floor(Math.random() * 5000),
        username:username,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    }
   
      data.push(arrInfo,afterRf)
  
       if(afterRf.length==0){
          window.localStorage.setItem("users",JSON.stringify(data.flat(1000)));
      }

      if (afterRf.length>0) {
          for (let i = 0; i < afterRf.length; i++) {

              if (afterRf[i].email == email) {
                  console.log("this email has already register");
                  break;

              }
              if(i==afterRf.length-1){
                if (afterRf[i].email != email) {
                  console.log("not Found");
                  window.localStorage.setItem("users",JSON.stringify(data.flat(1000)));
               }
              }
          }
      }
  }

  return (
    <div>
      <form className='form' onSubmit={handleRegister}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
          </label>
          <label>
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        </label>
        <button type="submit" className='btn btn-primary'>Register</button>
      </form>
    </div>
  );
}


function LoginRegisterTabs() {
  const [activeTab, setActiveTab] = useState('login');
  function handleTabClick(tab:string) {
    setActiveTab(tab);
  }

  return (
    <div className='loginRegi'>
      <ul>
        <li className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabClick('login')}>Login</li>
        <li className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabClick('register')}>Register</li>
      </ul>
      {activeTab === 'login' ? <Login /> : <Register />}
    </div>
  );
}

export default LoginRegisterTabs;
