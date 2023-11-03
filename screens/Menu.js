import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import theme from "../src/themes";
import { useNavigation } from "@react-navigation/native";
import Icon from "../src/components/Icon";
import { Overlay } from "@rneui/themed";

//this isn't technically a screen, but oh well. Relative imports are glitching
function Menu(props) {
  nav = useNavigation();

  return (
    <View
      style={{
        width: 200,
        height: 750,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Icon
        image={require("../assets/home.png")}
        onPress={() => nav.navigate("Login")}
        style={{ paddingBottom: 100 }}
      />
      {/* <Icon
        image={require("../assets/pill.png")}
        onPress={console.log("WHAT")}
        style={{ paddingBottom: 100 }}
      /> */}
    </View>
  );
}

export default Menu;
