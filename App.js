import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import BlogsScreen from "./screens/BlogsScreen";
import PortfoliosScreen from "./screens/PortfoliosScreen";
import PortfolioDetailScreen from "./screens/PortfolioDetailScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";

import { GlobalColors } from "./ui/GlobalColors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalColors.onyx,
            },
            headerTintColor: GlobalColors.lightSilver,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Welcome to My App",
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: "About HomerJ" }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ title: "Contact Me" }}
          />
          <Stack.Screen
            name="Blogs"
            component={BlogsScreen}
            options={{
              title: "My Blogs",
              headerStyle: {
                backgroundColor: GlobalColors.blogBlue,
              },
              headerTintColor: GlobalColors.timelessWhite,
            }}
          />
          <Stack.Screen 
            name="BlogDetail"
            component={BlogDetailScreen}
            options={{
              title: "Blog Detail",
              headerStyle: {
                backgroundColor: GlobalColors.blogBlue,
              },
              headerTintColor: GlobalColors.timelessWhite,
            }}
          />
          <Stack.Screen 
            name="PortfolioDetail"
            component={PortfolioDetailScreen}
            options={{
              title: "Portfolio Detail",
              headerStyle: {
                backgroundColor: GlobalColors.portfolioTan,
              },
              headerTintColor: GlobalColors.black,
            }}
          />
          <Stack.Screen
            name="Portfolios"
            component={PortfoliosScreen}
            options={{
              title: "My Portfolio Items",
              headerStyle: {
                backgroundColor: GlobalColors.portfolioTan,
              },
              headerTintColor: GlobalColors.black,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
