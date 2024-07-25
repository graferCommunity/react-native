import { ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './index';
import { Account } from './account';
import { AccountChanges } from './accountChanges';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <View
      style={{ flex: 1 }}
    >
      <ImageBackground style={{ flex: 1 }} source={require('../assets/images/splash.gif')}>
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HOME" component={HomeScreen} />
            <Stack.Screen name="ACCOUNT" component={Account} />
            <Stack.Screen name="ACCOUNT_CHANGES" component={AccountChanges} />
          </Stack.Navigator>
          <StatusBar hidden />
        </NavigationContainer>
      </ImageBackground>

    </View >
  );


}
