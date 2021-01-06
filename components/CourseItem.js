import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const CourseItem = (props) => {
  return (
    <View style={styles.courseItem}>
      <TouchableOpacity onPress={props.onSelectCourse}>
        <View>
          <View style={{ ...styles.courseRow, ...styles.couresHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.courseRow, ...styles.courseDetails }}>
            <Text>{props.duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  courseItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  courseRow: {
    flexDirection: "row",
  },
  couresHeader: {
    height: "90%",
  },
  courseDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
});

export default CourseItem;
