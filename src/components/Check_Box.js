import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import theme from "../themes";
import React, { useState, useEffect } from "react";

function CheckBox(props) {
  const [checked, setChecked] = React.useState(false);
  console.log(checked);
  return (
    <View style={props.style}>
      <Pressable onPress={() => setChecked(!checked)}>
        <Image
          source={checked == true ? props.fill : props.unfill}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
}

export default CheckBox;
