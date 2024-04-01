import React, {Dispatch, SetStateAction, useState} from 'react';
import {UiLogin} from './UiLogin';
import {AuthResult} from '../../types/types';

interface Props {
  setToken: Dispatch<SetStateAction<string>>;
}

export const Login = ({setToken}: Props) => {
  const [email, setEmail] = useState('anna.kislianskyi@petpace.com'); //TODO: remove this
  const [password, setPassword] = useState('aviv.levin'); //TODO: remove this

  const handleLogin = async () => {
    const res = await fetch('https://apiv2.pp-srv.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const data: AuthResult = await res.json();

    setToken(data.payload.token.token);
    setEmail('');
    setPassword('');
  };

  return (
    <UiLogin
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};
