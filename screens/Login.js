import { StyleSheet, Text, View, Image } from "react-native";
import Butt from "../src/components/Butt";

import { useNavigation } from "@react-navigation/native";
import theme from "../src/themes";
import Name_logo from "../src/components/Title_Card";
import tree_new_png from "../assets/tree_new.png";

function Login() {
  nav = useNavigation();
  return (
    <View style={login_styles.background}>
      <View style={login_styles.content}>
        <Image
          source={{
            uri: "/Users/mbailey/Desktop/Rooted/assets/ai_tree.png",
          }}
          style={{ width: 350, height: 400, marginBottom: 50 }}
        />
        <Text style={login_styles.text}>Rooted</Text>
        <Text style={login_styles.subtext}> Medicine made easy</Text>

        <Butt
          name="Start Growing"
          handlePress={() => nav.navigate("Tree")}
          marginBottom={40}
        />
      </View>
    </View>
  );
}

const login_styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  text: {
    color: "#5c7f3f",
    fontSize: 36,
    // fontFamily: "Vollkorn",
    fontWeight: "bold",
    lineHeight: 50,
  },
  subtext: {
    color: "#0a350a",
    fontSize: 20,
    marginBottom: 45,
    // fontFamily: "Poppins",
  },
});

export default Login;
