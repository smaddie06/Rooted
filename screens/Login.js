import { StyleSheet, Text, View, Image } from "react-native";
import Butt from "../src/components/Butt";
import { useNavigation } from "@react-navigation/native";
import theme from "../src/themes";
import Name_logo from "../src/components/Name_logo";
import tree_new_png from "../assets/tree_new.png";

function Login() {
  nav = useNavigation();
  return (
    <View style={login_styles.background}>
      <View style={login_styles.content}>
        <Name_logo marginBottom={70} />
        <Butt
          name="Login"
          handlePress={() => nav.navigate("Tree")}
          marginBottom={40}
        />
        <Butt
          name="Sign Up"
          handlePress={() => nav.navigate("Tree")}
          marginBottom={150}
        />
        <Image
          source={{
            uri: "/Users/mbailey/Desktop/Rooted/assets/rotated_tree.png",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    </View>
  );
}

const login_styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
});

export default Login;
