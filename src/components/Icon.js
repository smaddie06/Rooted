import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import theme from "../themes";

function Icon(props) {
  return (
    <View style={props.style}>
      <Pressable onPress={props.onPress}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{ width: 50, height: 50 }}
        />
      </Pressable>
    </View>
  );
}

export default Icon;
