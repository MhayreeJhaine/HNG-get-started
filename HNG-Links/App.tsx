import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const openGitHub = () => {
    Linking.openURL("https://github.com/MhayreeJhaine/HNG-get-started");
  };

  const openHNGLink = () => {
    Linking.openURL("https://hng.tech/hire/react-native-developers"); // Replace with actual HNG Hire Page
  };

  const openTelex = () => {
    Linking.openURL("https://telex.im/");
  };

  const openDelve = () => {
    Linking.openURL("https://delve.fun/");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <MaterialCommunityIcons name="code-brackets" size={75} color="white" />

        <Text style={styles.logoText}>HNG</Text>
      </View>

      <View style={{ gap: 10 }}>
        <Text style={styles.heading}>Hire React Native Developers</Text>
        <Text style={styles.description}>
          HNG has the best Developers available for hire and freelance jobs
          anywhere in the world. Find Developers that suit your needs — chat
          with us now.
        </Text>

        <TouchableOpacity onPress={openHNGLink} style={styles.hngBtn}>
          <Text style={styles.btnText}>Hire React Native Developers ➡ ➡</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>
          Want to explore more?{"   "} ➡{"  "}
        </Text>
        <Pressable onPress={openTelex}>
          <Text style={styles.link}>Telex</Text>
        </Pressable>
        <Text style={styles.slash}> | </Text>
        <Pressable onPress={openDelve}>
          <Text style={styles.link}>Delve</Text>
        </Pressable>

        <Text style={styles.text}>Need to view Github repo?</Text>
        <TouchableOpacity onPress={openGitHub}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "700",
              letterSpacing: 2,
              textDecorationLine: "underline",
            }}
          >
            Click me😊
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#00AEFF",
  },

  logo: {
    flexDirection: "row",
    gap: 7,
    alignSelf: "flex-start",
    top: 45,
  },

  logoText: {
    fontSize: 50,
    fontWeight: "700",
    top: 7,
    color: "#FFF",
  },

  heading: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },

  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 30,
  },

  hngBtn: {
    backgroundColor: "#fff",
    borderRadius: 35,
    paddingHorizontal: 40,
    paddingVertical: 16,
    marginVertical: 15,
  },

  btnText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
  },

  text: {
    color: "#fff",
    fontSize: 15,
  },

  slash: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  link: {
    fontSize: 19,
    fontWeight: "700",
    color: "#ffcc00",
    marginHorizontal: 2,
    textDecorationLine: "underline",
  },
});
export default App;
