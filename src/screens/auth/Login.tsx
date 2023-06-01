/* eslint-disable no-use-before-define */
import React, { createContext, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Session } from '@supabase/supabase-js';
import supabase from '../../utils/initSupabase';
import FormInput from '../../components/base/FormInput';

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

const Login = () => {
  const { isDarkmode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/auth-bg.svg')}
        style={styles.image}
      >
        <FormInput label="Email" />
        <FormInput label="Password" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default Login;
