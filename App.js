import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screenOptions: {
    headerShown: false
  },
  screens: {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}