import { Text, View, StyleSheet, Image, Button } from "react-native";
import theme from "../src/themes";
import Title_Card from "../src/components/Title_Card";
import Butt from "../src/components/Butt";
import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Icon from "../src/components/Icon.js";
import { useNavigation } from "@react-navigation/native";
import Menu from "../src/components/Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";

function User_tree() {
  const [count, setCount] = useState(0);
  const [lastPressTime, setLastPressTime] = useState(100000);
  const [canPush, setCanPush] = useState(true);
  const potato = "HEYO";

  useEffect(() => {
    initCount();
  }, []);

  useEffect(() => {
    updateCount();
  }, [count]);

  const initCount = async () => {
    try {
      const dayNumber = await AsyncStorage.getItem("Count");
      const currentDay = JSON.parse(dayNumber);
      if (currentDay !== null) {
        setCount(parseInt(currentDay));
        console.log(currentDay);
        console.log("we ran");
      } else {
        await AsyncStorage.setItem("Count", JSON.stringify(0));
        console.log("set to 0");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCount = async () => {
    console.log("MADE IT HERE");
    try {
      await AsyncStorage.setItem("Count", JSON.stringify(count));
      const dayNumber = await AsyncStorage.getItem("Count");
      const currentDay = JSON.parse(dayNumber);
      console.log("current value in async : ", currentDay);
    } catch (error) {
      console.log(error);
      console.log("NOTHING IN COUNT?");
    }
  };

  // const initCount = async () => {
  //     try {
  //       await AsyncStorage.setItem("Count", JSON.stringify(0));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // }
  // const getCount = async () => {
  //   try {
  //     const dayNumber = await AsyncStorage.getItem("Count");
  //     const currentDay = JSON.parse(dayNumber);
  //     if (currentDay !== null) {
  //       setCount(parseInt(currentDay))
  //       console.log(currentDay);
  //       console.log("we ran");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          height: 75,
          width: 400,
          marginTop: 100,
          zIndex: 1,
        }}
      >
        <Icon
          onPress={() => console.log("menu")}
          image="/Users/mbailey/Desktop/Rooted/assets/menu.png"
          style={{
            alignSelf: "center",
            marginLeft: 40,
            paddingRight: 10,
            zIndex: 1,
          }}
        />
        <Text style={[tree_styles.text, { alignSelf: "center" }]}>
          Your Tree Looks Good!
        </Text>
      </View>
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
        marginBottom={20}
        name={canPush ? "Take" : "Already Taken"}
        disabled={canPush ? false : true}
      />
      <Button title="go back temp" onPress={() => nav.navigate("Login")} />

      <View style={{ flexDirection: "row" }}>
        <Icon
          onPress={() => console.log("water")}
          image="/Users/mbailey/Desktop/Rooted/assets/hose.png"
        />
        <Icon
          onPress={() => console.log("sun")}
          image="/Users/mbailey/Desktop/Rooted/assets/sun.png"
          style={{ paddingLeft: 60, paddingRight: 60 }}
        />
        <Icon
          onPress={() => console.log("food")}
          image="/Users/mbailey/Desktop/Rooted/assets/pizza.png"
        />
      </View>
    </View>
  );
}

const tree_styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 25,
    // fontFamily: "Vollkorn",
    fontWeight: "bold",
    lineHeight: 70,
  },
  icon: {
    paddingLeft: 20,
  },
});

export default User_tree;
