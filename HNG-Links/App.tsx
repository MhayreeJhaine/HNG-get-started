import { StatusBar } from "expo-status-bar";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const openGitHub = () => {
    Linking.openURL("https://github.com/MhayreeJhaine/HNG-get-started");
  };

  const openHNGLink = () => {
    Linking.openURL("https://hng.tech/hire/react-native-developers"); // Replace with actual HNG Hire Page
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#00AEFF",
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          gap: 7,
          alignSelf: "flex-start",
          top: 45,
        }}
      >
        <MaterialCommunityIcons name="code-brackets" size={75} color="white" />

        <Text
          style={{
            fontSize: 50,
            fontWeight: "700",
            top: 7,
            color: "#FFF",
          }}
        >
          HNG
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontWeight: "600",
          }}
        >
          Hire React Native Developers
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#fff",
            lineHeight: 30,
          }}
        >
          HNG has the best Developers available for hire and freelance jobs
          anywhere in the world. Find Developers that suit your needs — chat
          with us now.
        </Text>

        <TouchableOpacity
          onPress={openHNGLink}
          style={{
            backgroundColor: "#fff",
            borderRadius: 35,
            paddingHorizontal: 40,
            paddingVertical: 16,
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Hire React Native Developers ➡ ➡
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
        <Text style={{ color: "#fff", fontSize: 17 }}>
          Need to view Github repo?
        </Text>
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

export default App;
