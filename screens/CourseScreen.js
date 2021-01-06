import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES, COURSEVIEW } from "../courseData/CourseCategoriesData";
import CourseItem from "../components/CourseItem";

const CourseScreen = (props) => {
  const renderCourseItem = (itemData) => {
    return (
      <CourseItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        onSelectCourse={() => {
          props.navigation.navigate({
            routeName: "CourseDetail",
            params: {
              courseId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  const catId = props.navigation.getParam("categoryId");

  const displayCourses = COURSEVIEW.filter(
    (course) => course.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayCourses}
        keyExtractor={(item, index) => item.id}
        renderItem={renderCourseItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CourseScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CourseScreen;
