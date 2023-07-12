import { View, Text, StyleSheet, ImageBackground } from "react-native";

import LinkButton from "../ui/LinkButton";
import image from "../assets/images/space-main.jpg";
import { GlobalColors } from "../ui/GlobalColors";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to My App</Text>
          <Text style={styles.subtitle}>
            “Experience is not what happens to you; it is what you do with what
            happens to you.” —Aldous Huxley
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <LinkButton
            onPress={() => navigation.navigate("About")}
            title="About Me"
            backgroundColor={GlobalColors.outerSpace}
            color={GlobalColors.navajoWhite}
          />
          <LinkButton
            onPress={() => navigation.navigate("Contact")}
            title="Contact Me"
            backgroundColor={GlobalColors.outerSpace}
            color={GlobalColors.brown}
          />
        </View>

        <View style={styles.actionsContainer}>
          <LinkButton
            onPress={() => navigation.navigate("Blogs")}
            title="See My Blogs"
            backgroundColor={GlobalColors.outerSpace}
            color={GlobalColors.blogBlue}
          />
          <LinkButton
            onPress={() => navigation.navigate("Portfolios")}
            title="Portfolio Items"
            backgroundColor={GlobalColors.outerSpace}
            color={GlobalColors.portfolioLightBlue}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    height: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalColors.coolBlack,
    marginVertical: 10,
    width: '60%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: GlobalColors.blue,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
