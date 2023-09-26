import { Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../themes";

function Butt(props) {
  return (
    <Pressable
      onPress={props.handlePress}
      style={[
        button_styles.container,
        {
          marginBottom: props.marginBottom,
        },
      ]}
      disabled={props.disabled || false}
    >
      <Text style={button_styles.text}>{props.name}</Text>
    </Pressable>
  );
}
const button_styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10",
    marginBottom: 200,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
export default Butt;
