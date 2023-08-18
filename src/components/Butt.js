import { Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../themes";

function Butt(props) {
  return (
    <Pressable
      onPress={props.handlePress}
      style={[button_styles.container, { marginBottom: props.marginBottom }]}
    >
      <Text style={button_styles.text}>{props.name}</Text>
    </Pressable>
  );
}
const button_styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20",
    marginBottom: 200,
  },
  text: {
    color: theme.colors.tertiary,
    fontSize: 30,
  },
});
export default Butt;
