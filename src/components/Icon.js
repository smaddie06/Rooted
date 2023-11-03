import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import menu from "/Users/mbailey/Desktop/Rooted/assets/menu.png";

function Icon(props) {
  return (
    <View style={props.style}>
      <Pressable onPress={props.onPress}>
        <Image source={props.image} style={{ width: 50, height: 50 }} />
      </Pressable>
    </View>
  );
}

export default Icon;
