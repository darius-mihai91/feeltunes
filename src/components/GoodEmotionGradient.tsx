import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const GoodEmotionGradient = memo(() => {
  return (
    <Image
      style={styles.goodEmotionGradient}
      resizeMode="cover"
      source={require("../assets/good-emotion-gradient1.png")}
    />
  );
});

const styles = StyleSheet.create({
  goodEmotionGradient: {
    position: "absolute",
    top: 11,
    left: 0,
    width: 375,
    height: 772,
  },
});

export default GoodEmotionGradient;
