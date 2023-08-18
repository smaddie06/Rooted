import { Text, View, StyleSheet } from "react-native";
import theme from "../themes";

function Name_logo(props) {
  return (
    <View style={[logo_styles.container, { marginBottom: props.marginBottom }]}>
      <Text style={logo_styles.text}>Rooted</Text>
    </View>
  );
}

const logo_styles = StyleSheet.create({
  container: {
    height: 125,
    width: 350,
    backgroundColor: theme.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 50,
    color: theme.colors.tertiary,
  },
});

export default Name_logo;
