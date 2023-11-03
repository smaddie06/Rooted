import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import theme from "../src/themes";
import React, { useState, useEffect } from "react";
import Check_Box from "../src/components/Check_Box";
import { ThemeConsumer } from "@rneui/themed";

function Medicine_Check() {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    // <View style={tree_styles.back_card}>
    <View>
      <View style={tree_styles.mini_card}>
        <Check_Box
          check={false}
          fill={require("../assets/checkbox.png")}
          unfill={require("../assets/uncheck.png")}
          style={{ alignSelf: "center", paddingRight: 20 }}
        />
        <Text style={tree_styles.text}>Melatonin</Text>
      </View>
      <View style={tree_styles.mini_card}>
        <Check_Box
          check={false}
          fill={require("../assets/checkbox.png")}
          unfill={require("../assets/uncheck.png")}
          style={{ alignSelf: "center", paddingRight: 20 }}
        />
        <Text style={tree_styles.text}>Seratonin</Text>
      </View>
      <View style={tree_styles.mini_card}>
        <Check_Box
          check={false}
          fill={require("../assets/checkbox.png")}
          unfill={require("../assets/uncheck.png")}
          style={{ alignSelf: "center", paddingRight: 20 }}
        />
        <Text style={tree_styles.text}>Zoloft</Text>
      </View>
    </View>
  );
}

export default Medicine_Check;

const tree_styles = StyleSheet.create({
  back_card: {
    width: 300,
    height: 300,
    borderRadius: 12,
    backgroundColor: theme.colors.four,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 150,
  },
  mini_card: {
    width: 250,
    height: 100,
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
  },
  // text: {
  //   color: theme.colors.secondary,
  //   fontSize: 25,
  //   // fontFamily: "Vollkorn",
  //   fontWeight: "bold",
  //   lineHeight: 70,
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   paddingHorizontal: 30,
  // },
  mini_card: {
    width: 250,
    height: 100,
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: theme.colors.four,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 25,
    // fontFamily: "Vollkorn",
    fontWeight: "bold",
    lineHeight: 70,
  },
});
