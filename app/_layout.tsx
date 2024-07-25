import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './index';
import { Account } from './account';
import { AccountChanges } from './accountChanges';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    alert('Done');
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      setTimeout(() => {
        setNavigationReady(true);
      }, 3000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <ImageBackground style={{ flex: 1 }} source={require('../assets/images/splash.gif')}>
        {navigationReady && (<>
          <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="HOME" component={HomeScreen} />
              <Stack.Screen name="ACCOUNT" component={Account} />
              <Stack.Screen name="ACCOUNT_CHANGES" component={AccountChanges} />
            </Stack.Navigator>
            <StatusBar hidden />
          </NavigationContainer>
        </>)}
      </ImageBackground>

    </View >
  );


}
