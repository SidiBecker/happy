import React from 'react';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito';

import Routes from './src/routes';
import { AppLoading } from 'expo';

export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
