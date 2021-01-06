import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoriesCourseGrids = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex:1}}onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color }}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.spanTitle}>Class</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    borderRadius:10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 25,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color:'white'
  },
  spanTitle: {
      color:'white'
  }
});

export default CategoriesCourseGrids;
