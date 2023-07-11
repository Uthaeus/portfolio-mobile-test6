import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import BlogsScreen from './screens/BlogsScreen';
import PortfoliosScreen from './screens/PortfoliosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Blogs" component={BlogsScreen} options={{
            title: 'My Blogs',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'black',
          }} />
          <Stack.Screen name="Portfolios" component={PortfoliosScreen} options={{
            title: 'My Portfolio Items',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'darkgrey',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
