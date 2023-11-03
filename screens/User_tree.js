import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import theme from "../src/themes";
import Butt from "../src/components/Butt";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Menu from "./Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Overlay } from "@rneui/themed";
import tree_new_png from "../assets/tree_new.png";
import menu from "../assets/menu.png";
import Icon from "../src/components/Icon";
import Medicine_Check from "./Medicine_Check";
import Check_Box from "../src/components/Check_Box";

function User_tree() {
  const [count, setCount] = useState(0);
  const [lastPressTime, setLastPressTime] = useState(100000);
  const [canPush, setCanPush] = useState(true);
  const [seeMed, setSeeMed] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    initCount();
  }, []);

  useEffect(() => {
    updateCount();
  }, [count]);

  // runs only when the component is re-rendered. On the very first run through when only null is stored in async storage
  // a count value with a key of 0 is initialised
  //after that, the value of count stored in async storage is fetched and the value of count stored in state is updated to be
  //equal to the value stored in async
  const initCount = async () => {
    try {
      const dayNumber = await AsyncStorage.getItem("Count");
      const currentDay = JSON.parse(dayNumber);
      if (currentDay !== null) {
        setCount(parseInt(currentDay));
        // console.log(currentDay);
      } else {
        await AsyncStorage.setItem("Count", JSON.stringify(0));
        console.log("set to 0");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //runs every time the value of state count changes
  //updates the value in async to be equal to the new value of state count
  const updateCount = async () => {
    // console.log("MADE IT HERE");
    try {
      await AsyncStorage.setItem("Count", JSON.stringify(count));
      const dayNumber = await AsyncStorage.getItem("Count");
      const currentDay = JSON.parse(dayNumber);
      // console.log("current value in async : ", currentDay);
    } catch (error) {
      console.log(error);
      console.log("NOTHING IN COUNT?");
    }
  };

  const increment = () => {
    // Update the last press time
    setCount((prevCount) => prevCount + 1);
    setLastPressTime(new Date().toISOString());
    console.log(lastPressTime);
    setCanPush(false);
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
      <Overlay
        isVisible={menuVisible}
        pressableProps=""
        onBackdropPress={() => setMenuVisible(false)}
        overlayStyle={{
          justifyContent: "flex-start",
          backgroundColor: theme.colors.secondary,
          alignContent: "flex-start",
          marginRight: 300,
          height: 950,
          width: 200,
        }}
      >
        <Menu />
        <View
          style={{
            marginRight: 300,
            height: 400,
            width: 200,
            backgroundColor: theme.colors.secondary,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* add items here that need to be in this file, not a child */}
        </View>
      </Overlay>

      <Overlay
        isVisible={seeMed}
        onBackdropPress={() => setSeeMed(false)}
        overlayStyle={{
          back_card: {
            width: 300,
            height: 300,
            borderRadius: 12,
            backgroundColor: theme.colors.four,
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 150,
          },
        }}
      >
        <Medicine_Check />
      </Overlay>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          height: 75,
          width: 400,
          marginTop: 70,
          elevation: 1,
          zIndex: 1,
        }}
      >
        <Icon
          onPress={() => setMenuVisible(true)}
          image={require("../assets/menu.png")}
          style={{
            alignSelf: "center",
            marginLeft: 40,
            paddingRight: 10,
            elevation: 1,
            zIndex: 1,
          }}
        />

        {/* <Medicine_Check /> */}
        <Text
          style={[
            tree_styles.text,
            { alignSelf: "center", elevation: 1, zIndex: 1 },
          ]}
        >
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
          image={require("../assets/refresh.png")}
          style={{ alignSelf: "center", marginLeft: 40, paddingRight: 100 }}
        />
        <Text style={[tree_styles.text, { fontSize: 40, alignSelf: "center" }]}>
          {count}
        </Text>
      </View>
      {/* <Medicine_Check /> */}
      <Image
        source={require("../assets/tree_squre.png")}
        style={{ width: 325, height: 375, marginBottom: 50 }}
      />

      <Butt
        handlePress={increment}
        marginBottom={30}
        name={canPush ? "Take" : "Already Taken"}
        disabled={canPush ? false : true}
        color={canPush ? theme.colors.secondary : "#C9DAB3"}
      />
      <View style={{ flexDirection: "row" }}>
        <Icon
          onPress={() => console.log("water")}
          image={require("../assets/hose.png")}
        />
        <Icon
          onPress={() => console.log("sun")}
          image={require("../assets/sun.png")}
          style={{ paddingLeft: 40 }}
        />
        <Icon
          onPress={() => setSeeMed(true)}
          image={require("../assets/pizza.png")}
          style={{ paddingLeft: 40 }}
        />
        <Icon
          image={require("../assets/pill.png")}
          onPress={() => setSeeMed(true)}
          style={{ paddingLeft: 40 }}
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
  mini_card: {
    width: 250,
    height: 100,
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: theme.colors.four,
  },
});

export default User_tree;
