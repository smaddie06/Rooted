import { Text, View, StyleSheet, Image, Button } from "react-native";
import theme from "../src/themes";
import Title_Card from "../src/components/Title_Card";
import Butt from "../src/components/Butt";
import React, { useState } from "react";
import Moment from "react-moment";
import Icon from "../src/components/Icon.js";
import { useNavigation } from "@react-navigation/native";

function User_tree() {
  const [count, setCount] = useState(0);
  const [lastPressTime, setLastPressTime] = useState(100000);
  const [canPush, setCanPush] = useState(true);

  //const increment = () =>
  const increment = () => {
    // Update the last press time
    setCount((prevCount) => prevCount + 1);
    setLastPressTime(new Date().toISOString());
    console.log(lastPressTime);
    setCanPush(false);
    // setLastPressTime(moment());
  };

  const handleRefresh = () => {
    const currentTime = new Date().getTime();
    const lastPressTimestamp = new Date(lastPressTime).getTime();
    console.log(currentTime);
    console.log("PRESS TIME");
    console.log(lastPressTimestamp);
    const cooldownDuration = 20000;
    if (currentTime - lastPressTimestamp < cooldownDuration) {
      // Disable the button
      console.log("NOPE");
      setCanPush(false);
    } else {
      // Enable the button
      console.log("YEP");
      setCanPush(true);
    }
  };
  nav = useNavigation();

  return (
    <View style={tree_styles.background}>
      <Text style={tree_styles.text}>Your Tree Looks Good!</Text>
      <View
        style={{
          flexDirection: "row",
          height: 75,
          width: 400,
        }}
      >
        <Icon
          onPress={handleRefresh}
          image="/Users/mbailey/Desktop/Rooted/assets/refresh.png"
          style={{ alignSelf: "center", marginLeft: 40, paddingRight: 100 }}
        />
        <Text style={[tree_styles.text, { fontSize: 40, alignSelf: "center" }]}>
          {count}
        </Text>
      </View>
      <Image
        source={{
          uri: "/Users/mbailey/Desktop/Rooted/assets/tree_squre.png",
        }}
        style={{ width: 350, height: 400, marginBottom: 50 }}
      />
      <Butt
        handlePress={increment}
        marginBottom={30}
        name={canPush ? "Take" : "Already Taken"}
        disabled={canPush ? false : true}
      />
      <Button title="go back temp" onPress={() => nav.navigate("Login")} />
    </View>
  );
}

const tree_styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop: 80,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  text: {
    color: theme.colors.secondary,
    fontSize: 20,
    // fontFamily: "Vollkorn",
    fontWeight: "bold",
    lineHeight: 50,
  },
});

export default User_tree;
