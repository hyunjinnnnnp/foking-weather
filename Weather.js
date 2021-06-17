import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3B4371", "#F3904F"],
    title: "",
    subtitle: "",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#DBE6F6", "#C5796D"],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4CA1AF", "#C4E0E5"],
    title: "Rain",
    subtitle: "밖에비온다주륵주륵",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#9796f0", "#fbc7d4"],
    title: "Snow",
    subtitle: "❄️❄️❄️❄️❄️⛄️❄️❄️❄️❄️❄️",
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#5D4157", "#A8CABA"],
    title: "이상한 날씨",
    subtitle: "꾸물꾸물",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ED4264", "#FFEDBC"],
    title: "Clear",
    subtitle: "드라이브 하러 🏍",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#DBE6F6", "#C5796D"],
    title: "Clouds",
    subtitle: "비는 안오겠쥬",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Dust",
    subtitle: "마스크 필수",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#0ABFBC", "#FC354C"],
    title: "Mist",
    subtitle: "운전 조심하세요",
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
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
