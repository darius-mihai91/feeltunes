import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/provider/AuthProvider';
import Navigation from './src/navigation';
import useAppFonts from './src/hooks/useAppFonts';

export default function App() {
  useAppFonts();

  const images = [
    require('./assets/images/login.png'),
    require('./assets/images/register.png'),
    require('./assets/images/forget.png'),
  ];

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar />
    </ThemeProvider>
  );
}
