import { Text, View, StyleSheet } from "react-native";
import theme from "../themes";

function Title_Card(props) {
  return (
    <View style={[logo_styles.container, { marginBottom: props.marginBottom }]}>
      <Text style={logo_styles.text}>{props.text}</Text>
    </View>
  );
}

const logo_styles = StyleSheet.create({
  container: {
    height: 125,
    width: 350,
    backgroundColor: theme.colors.title_back,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 50,
    color: theme.colors.title_text,
  },
});

export default Title_Card;
