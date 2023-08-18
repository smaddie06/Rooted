import { Text, View, StyleSheet } from "react-native";

function User_tree() {
  return (
    <View style={tree_styles.container}>
      <Text>Omg a tree lol!!!</Text>
    </View>
  );
}

const tree_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default User_tree;
