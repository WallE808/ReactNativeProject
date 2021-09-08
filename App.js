import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import DT from './darkTheme';
import myDarkTheme from './darkTheme';



function HomeScreen({ navigation }) {
  return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> 
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const HomeStack = createStackNavigator()

// function HomeScrenStack({ navigation }) {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
//     </HomeStack.Navigator>
//   )
// }

// function App() {
//   const scheme = useColorScheme()
//   const MyDarkTheme = DT()

//   return (
//     <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
//       <HomeScrenStack />
//     </NavigationContainer>
//   )
// }

export default App
