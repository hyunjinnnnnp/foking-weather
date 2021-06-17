import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3B4371", "#F3904F"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1e130c", "#9a8478"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#DBE6F6", "#C5796D"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4CA1AF", "#C4E0E5"],
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#DAE2F8", "#D6A4A4"],
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#5D4157", "#A8CABA"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ED4264", "#FFEDBC"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#ECE9E6", "#FFFFFF"],
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#1F1C2C", "#928DAB"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#0ABFBC", "#FC354C"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
