import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Login} from './src/components/Login/Login';
import {Home} from './src/components/Home/Home';

const App = () => {
  const [token, setToken] = useState('');
  return (
    <SafeAreaView>
      {token ? <Home token={token} /> : <Login setToken={setToken} />}
    </SafeAreaView>
  );
};

export default App;
