import * as React from 'react';
import Movies from './Movies';
//import Navigator from 'react-native-deprecated-custom-components';
import Confirmation from './Confirmation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// const RouteMapper = (route, navigator) => {
//   if (route.name === 'movies') {
//     return (
//       <Movies navigator={navigator} />
//     );
//   } else if (route.name === 'confirmation') {
//     return (
//       <Confirmation code={route.code} navigator={navigator} />
//     );
//   }
// };

export default function App() {
    return (
      // <Navigator
      //   // Default to movies route
      //   initialRoute={{ name: 'movies' }}
      //   // Use FloatFromBottom transition between screens
      //   configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      //   // Pass a route mapper functions
      //   renderScene={RouteMapper}
      // />
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    );
  
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="movies" component={Movies} />
        <Stack.Screen name="confirmation" component={Confirmation} />
      </Stack.Navigator>
  );
}

