"use client"
import React, { useCallback, useState } from 'react';
import '../Home/Homepage.css';
import {
  LoginSocialGoogle,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import Dashboard from '../Dashboard/Dashboard';
import { useRouter } from 'next/navigation';




const Homepage = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>({});
const router=useRouter()
  const onLoginStart = useCallback(() => {
   
    router.push("/Dashboard")
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <>
    
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className="title"> Google SSO APP</h1>
      

      {/* this is google sso code for authenticatin this login is not working becouse google security blocked me i and not gerating clent id  */}
     { typeof window !== undefined &&  <LoginSocialGoogle 
          client_id={"744e40ec308516b31e8bfb2930a07ce134ecfe03"}
          onLoginStart={onLoginStart}
          redirect_uri={"/Dashboard"}
         
          onResolve={({ provider, data }: any) => {
            setProvider(provider);
            setProfile(data);
          
          }}
          onReject={(err:any) => {
          console.log(err);
          
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>}
      
      </div>
    </>
  );
};

export default Homepage;